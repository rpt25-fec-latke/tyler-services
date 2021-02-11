import React from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';
import $ from 'jquery';
import styled from 'styled-components';

import ReviewsBreakdown from './components/ReviewsBreakdown/ReviewsBreakdown.jsx';
import ReviewFilters from './components/ReviewFilters/ReviewFilters.jsx';
import MainReviewList from './components/MainReviewList/MainReviewList.jsx';
import RecentReviewList from './components/RecentReviewList/RecentReviewList.jsx';

import { Reviews, CenterReviewsContainer, ReviewListContainer, ReviewsTitle } from './styled';

class CustomerReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: {},
      mainReviewsList: [],
      recentReviewsList: [],
      displayAs: 'summary',
      reviewFilterDisplayPills: [null, 'Steam Purchasers', 'Your Languages', null, null],
      reviewFilters: {
        reviewType: null,
        purchaseType: 'steam',
        languageType: 'yourLanguages',
        dateRange: {
          startDateRange: null,
          endDateRange: null,
        },
        playTime: {
          min: null,
          max: null,
        },
      },
      filteredReviewStats: {
        totalReviews: 0,
        totalPositive: 0,
        percentPositive: 0.00,
        ratingGroupInfo: {
          ratingGroup: null,
          type: null,
        },
      },
      questionMarkImage: 'https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/user-profile-pictures/icon_questionmark.png',
      questionMarkImageDark: 'https://store.cloudflare.steamstatic.com/public/shared/images/ico/icon_questionmark_dark.png',
      steamLabsLogo: 'https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/steam_labs_logo.svg',
    };
    this.updateReviewFilters = this.updateReviewFilters.bind(this);
    this.addReviewFilterPill = this.addReviewFilterPill.bind(this);
    this.removeReviewFilterPill = this.removeReviewFilterPill.bind(this);
    this.formatDateForPillText = this.formatDateForPillText.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.updateDisplayAs = this.updateDisplayAs.bind(this);
    this.getFilteredReviewStats = this.getFilteredReviewStats.bind(this);
    this.getRatingGroup = this.getRatingGroup.bind(this);
  }

  componentDidMount() {
    const url = window.location.href;
    const id = url.indexOf('?id=') !== -1 ? url.slice(url.indexOf('?id=') + 4) : 1;

    $.ajax({
      method: 'GET',
      url: `http://localhost:3001/reviews?id=${id}`,
      success: (data) => {
        const { reviewFilters, displayAs } = this.state;

        const starterMainReviewsList = this.filterReviews(reviewFilters, displayAs, data.allReviewsOrderedHelpful);
        const starterRecentReviewList = data.allReviewsRecentLastThirty;
        const filteredReviewStats = this.getFilteredReviewStats(starterMainReviewsList);

        this.setState({
          reviews: data,
          mainReviewsList: starterMainReviewsList,
          recentReviewList: starterRecentReviewList,
          filteredReviewStats: filteredReviewStats,
        });
      },
      error: (err) => {
        window.alert('Invalid game ID, please enter another ID');
      },
    });
  }

  getRatingGroup(percentPositive) {
    const ratingGroupInfo = {};

    if (percentPositive > 0.9 && percentPositive <= 1) {
      ratingGroupInfo.ratingGroup = 'Overwhelmingly Positive';
      ratingGroupInfo.type = 'positive';
    } else if (percentPositive > 0.8 && percentPositive <= 0.9) {
      ratingGroupInfo.ratingGroup = 'Very Positive';
      ratingGroupInfo.type = 'positive';
    } else if (percentPositive > 0.6 && percentPositive <= 0.8) {
      ratingGroupInfo.ratingGroup = 'Mostly Positive';
      ratingGroupInfo.type = 'positive';
    } else if (percentPositive > 0.4 && percentPositive <= 0.6) {
      ratingGroupInfo.ratingGroup = 'Mixed';
      ratingGroupInfo.type = 'mixed';
    } else if (percentPositive > 0.2 && percentPositive <= 0.4) {
      ratingGroupInfo.ratingGroup = 'Mostly Negative';
      ratingGroupInfo.type = 'negative';
    } else if (percentPositive > 0.1 && percentPositive <= 0.2) {
      ratingGroupInfo.ratingGroup = 'Very Negative';
      ratingGroupInfo.type = 'negative';
    } else if (percentPositive >= 0 && percentPositive <= 0.1) {
      ratingGroupInfo.ratingGroup = 'Overwhelmingly Negative';
      ratingGroupInfo.type = 'negative';
    }

    return ratingGroupInfo;
  }

  getFilteredReviewStats(reviewsArray) {
    const reviewStats = {};
    reviewStats.totalReviews = reviewsArray.length;

    let totalPositiveReviews = 0;
    for (let i = 0; i < reviewsArray.length; i++) {
      const currentReview = reviewsArray[i];
      currentReview.isRecommended ? totalPositiveReviews++ : null;
    }
    reviewStats.totalPositive = totalPositiveReviews;

    reviewStats.percentPositive = (reviewStats.totalPositive / reviewStats.totalReviews).toFixed(2);
    reviewStats.ratingGroupInfo = this.getRatingGroup(reviewStats.percentPositive);

    return reviewStats;
  }

  filterReviews(reviewFilters, displayAs, reviews) {
    const { reviews: { allReviewsOrderedRecent, allReviewsOrderedHelpful, allReviewsOrderedFunny, allReviewsRecentLastThirty } } = this.state;
    const filteredReviews = [];
    let reviewList;

    if (reviews) {
      reviewList = reviews;
    } else if (displayAs === 'recent') {
      reviewList = allReviewsOrderedRecent;
    } else if (displayAs === 'mostHelpful' || displayAs === 'summary') {
      reviewList = allReviewsOrderedHelpful;
    } else if (displayAs === 'funny') {
      reviewList = allReviewsOrderedFunny;
    } else if (displayAs === 'recentLastThirty') {
      reviewList = allReviewsRecentLastThirty;
    }

    const { reviewType, purchaseType, languageType, dateRange: { startDateRange, endDateRange }, playTime: { minimum, maximum } } = reviewFilters;

    for (let i = 0; i < reviewList.length; i++) {
      const currentReview = reviewList[i];
      const { isRecommended, isPurchasedOrActivatedViaSteamFlags, reviewLanguage, reviewDate, userHoursOnRecordAtTimeOfReview } = currentReview;

      if (reviewType) {
        if ((reviewType === 'positive' && !isRecommended) || (reviewType === 'negative' && isRecommended)) {
          continue;
        }
      }

      if (purchaseType) {
        if ((purchaseType === 'steam' && isPurchasedOrActivatedViaSteamFlags === 'activated') || (purchaseType === 'other' && isPurchasedOrActivatedViaSteamFlags === 'purchased')) {
          continue;
        }
      }

      if (languageType) {
        if (reviewLanguage !== 'EN') {
          continue;
        }
      }

      const reviewDateConverted = new Date(reviewDate);

      if (startDateRange && endDateRange) {
        const startDate = new Date(`${startDateRange}T00:00:00`);
        const endDate = new Date(`${endDateRange}T00:00:00`);
        if (reviewDateConverted < startDate || reviewDateConverted > endDate) {
          continue;
        }
      } else if (startDateRange) {
        const startDate = new Date(`${startDateRange}T00:00:00`);
        if (reviewDateConverted < startDate) {
          continue;
        }
      } else if (endDateRange) {
        const endDate = new Date(`${endDateRange}T00:00:00`);
        if (reviewDateConverted > endDate) {
          continue;
        }
      }

      if (minimum) {
        if (userHoursOnRecordAtTimeOfReview < minimum) {
          continue;
        }
      }

      if (maximum) {
        if (userHoursOnRecordAtTimeOfReview > maximum) {
          continue;
        }
      }

      filteredReviews.push(currentReview);
    }

    return filteredReviews;
  }

  formatDateForPillText(date) {
    const convertedDate = new Date(`${date}T00:00:00`);
    const shortMonth = convertedDate.toLocaleString('default', { month: 'short' });
    const day = convertedDate.getDate();
    const fullYear = convertedDate.getFullYear();
    return `${shortMonth} ${day}, ${fullYear}`;
  }

  addReviewFilterPill(value, type) {
    const { reviewFilterDisplayPills, reviewFilters } = this.state;
    const reviewFilterPillText = {
      all: null,
      positive: 'Positive',
      negative: 'Negative',
      steam: 'Steam Purchasers',
      other: 'Not Purchased on Steam',
      your: 'Your Languages',
    };
    const reviewFilterArrayPositions = {
      reviewType: 0,
      purchaseType: 1,
      languageType: 2,
    };

    if (type === 'reviewType' || type === 'purchaseType' || type === 'languageType') {
      reviewFilterDisplayPills[reviewFilterArrayPositions[type]] = reviewFilterPillText[value];
    } else if (type === 'startDateRange' || type === 'endDateRange') {
      let formattedStartDate;
      let formattedEndDate;

      if (type === 'startDateRange') {
        formattedStartDate = this.formatDateForPillText(value);
        reviewFilters.dateRange.endDateRange ? formattedEndDate = this.formatDateForPillText(reviewFilters.dateRange.endDateRange) : null;
      } else if (type === 'endDateRange') {
        formattedEndDate = this.formatDateForPillText(value);
        reviewFilters.dateRange.startDateRange ? formattedStartDate = this.formatDateForPillText(reviewFilters.dateRange.startDateRange) : null;
      }

      if ((type === 'startDateRange' && reviewFilters.dateRange.endDateRange) || (type === 'endDateRange' && reviewFilters.dateRange.startDateRange)) {
        reviewFilterDisplayPills[3] = `View Only ${formattedStartDate} - ${formattedEndDate}`;
      } else if (type === 'startDateRange') {
        reviewFilterDisplayPills[3] = `View Only after ${formattedStartDate}`;
      } else if (type === 'endDateRange') {
        reviewFilterDisplayPills[3] = `View Only before ${formattedEndDate}`;
      }
    } else if (type === 'playTime') {
      if (value.minimum && value.maximum) {
        reviewFilterDisplayPills[4] = `Playtime: ${value.minimum} hour(s) to ${value.maximum} hours`;
      } else if (value.minimum) {
        reviewFilterDisplayPills[4] = `Playtime: Over ${value.minimum} hours`;
      } else if (value.maximum) {
        reviewFilterDisplayPills[4] = `Playtime: 0 hour(s) to ${value.maximum} hours`;
      }
    }
    return reviewFilterDisplayPills;
  }

  removeReviewFilterPill(e, type) {
    const { reviewFilterDisplayPills } = this.state;
    const reviewFilterArrayPositions = {
      reviewType: 0,
      purchaseType: 1,
      languageType: 2,
      dateRange: 3,
      playTime: 4,
    };

    type === 'endDateRange' || type === 'endDateRange' ? type = 'dateRange' : null;

    if (type !== undefined) {
      reviewFilterDisplayPills[reviewFilterArrayPositions[type]] = null;
      return reviewFilterDisplayPills;
    } else if (e.innerText === 'Positive' || e.innerText === 'Negative') {
      this.updateReviewFilters(null, 'reviewType');
    } else if (e.innerText.indexOf('Steam') !== -1) {
      this.updateReviewFilters(null, 'purchaseType');
    } else if (e.innerText === 'Your Languages') {
      this.updateReviewFilters(null, 'languageType');
    } else if (e.innerText.indexOf('View Only') !== -1) {
      this.updateReviewFilters(null, 'startDateRange');
      this.updateReviewFilters(null, 'endDateRange');
    } else if (e.innerText.indexOf('Playtime') !== -1) {
      this.updateReviewFilters({ minimum: null, maximum: null }, 'playTime');
    }
  }

  updateReviewFilters(value, type) {
    const { reviewFilters, displayAs } = this.state;

    // Step 1: Update review filters

    value === 'all' ? value = null : null;
    if (type === 'startDateRange' || type === 'endDateRange') {
      reviewFilters.dateRange[type] = value;
    } else {
      reviewFilters[type] = value;
    }

    // Step 2: Update review filter display pills

    let updatedReviewFilterPills;
    type === 'playTime' && value.minimum === null && value.maximum === null ? this.removeReviewFilterPill(null, type) : null;
    value ? updatedReviewFilterPills = this.addReviewFilterPill(value, type) : updatedReviewFilterPills = this.removeReviewFilterPill(null, type);

    // Step 3: Update review lists and review stats

    const updatedMainReviewsList = this.filterReviews(reviewFilters, displayAs);
    const updatedRecentReviewsList = this.filterReviews(reviewFilters, 'recentLastThirty');
    const filteredReviewStats = this.getFilteredReviewStats(updatedMainReviewsList);

    // Step 4: Set state with all 4 updated

    this.setState({
      reviewFilters: reviewFilters,
      reviewFilterDisplayPills: updatedReviewFilterPills,
      mainReviewsList: updatedMainReviewsList,
      recentReviewsList: updatedRecentReviewsList,
      filteredReviewStats: filteredReviewStats,
    });
  }

  updateDisplayAs(newDisplayAs) {
    const { reviewFilters } = this.state;

    // Step 1: Update review lists and reviewstats

    const updatedMainReviewsList = this.filterReviews(reviewFilters, newDisplayAs);
    const updatedRecentReviewsList = this.filterReviews(reviewFilters, 'recentLastThirty');
    const filteredReviewStats = this.getFilteredReviewStats(updatedMainReviewsList);

    // Step 2: Set State with the 4 updated

    this.setState({
      mainReviewsList: updatedMainReviewsList,
      recentReviewsList: updatedRecentReviewsList,
      displayAs: newDisplayAs,
      filteredReviewStats: filteredReviewStats,
    });
  }

  render() {
    if (this.state.reviews.allReviews) {
      const { reviews, questionMarkImage, steamLabsLogo, reviewFilterDisplayPills, questionMarkImageDark, filteredReviewStats } = this.state;
      return (
        <Reviews>
          <CenterReviewsContainer>
            <ReviewsTitle>Customer Reviews</ReviewsTitle>
            <ReviewsBreakdown
              reviewStats={reviews.reviewStats}
              totalType={reviews.reviewStats.overallRatingGroup.type}
              recentType={reviews.reviewStats.recentRatingGroup.type}
              questionMarkImage={questionMarkImage} />
            <ReviewFilters
              reviewStats={reviews.reviewStats}
              steamLabsLogo={steamLabsLogo}
              updateReviewFilters={this.updateReviewFilters}
              updateDisplayAs={this.updateDisplayAs}
              reviewFilterDisplayPills={reviewFilterDisplayPills}
              questionMarkImage={questionMarkImageDark}
              removeReviewFilterPill={this.removeReviewFilterPill}
              filteredReviewStats={filteredReviewStats} />
            <ReviewListContainer>
              <MainReviewList />
              <RecentReviewList />
            </ReviewListContainer>
          </CenterReviewsContainer>
        </Reviews>
      );
    } else {
      return (
        <Reviews>
          <CenterReviewsContainer>
            <div>Loading...</div>
            <img src="https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/user-profile-pictures/loading.gif" alt="loading gif"></img>
          </CenterReviewsContainer>
        </Reviews>
      );
    }
  }
}

ReactDOM.render(<CustomerReviews />, document.getElementById('reviews'));
