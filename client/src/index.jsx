import React from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';
import $ from 'jquery';
import styled from 'styled-components';

import ReviewsBreakdown from './components/ReviewsBreakdown/ReviewsBreakdown.jsx';
import ReviewFilters from './components/ReviewFilters/ReviewFilters.jsx';
import MainReviewList from './components/MainReviewList/MainReviewList.jsx';
import RecentReviewList from './components/RecentReviewList/RecentReviewList.jsx';

import { Reviews, LeftReviewsContainer, CenterReviewsContainer, RightReviewsContainer, ReviewListContainer, ReviewsTitle } from './styled';

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
      questionMarkImage: 'https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/user-profile-pictures/icon_questionmark.png',
      questionMarkImageDark: 'https://store.cloudflare.steamstatic.com/public/shared/images/ico/icon_questionmark_dark.png',
      steamLabsLogo: 'https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/steam_labs_logo.svg',
    };
    this.updateReviewFilters = this.updateReviewFilters.bind(this);
    this.addReviewFilterPill = this.addReviewFilterPill.bind(this);
    this.removeReviewFilterPill = this.removeReviewFilterPill.bind(this);
    this.formatDateForPillText = this.formatDateForPillText.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
  }

  componentDidMount() {
    const url = window.location.href;
    const id = url.indexOf('?id=') !== -1 ? url.slice(url.indexOf('?id=') + 4) : 1;

    $.ajax({
      method: 'GET',
      url: `http://localhost:3001/reviews?id=${id}`,
      success: (data) => {
        console.log(data);
        this.setState({
          reviews: data,
          mainReviewsList: data.mostHelpful,
          recentReviewsList: data.mostRecentLastThirty,
        });
      },
      error: (err) => {
        window.alert('Invalid game ID, please enter another ID');
      },
    });
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

  removeReviewFilterPill(type) {
    const { reviewFilterDisplayPills } = this.state;
    const reviewFilterArrayPositions = {
      reviewType: 0,
      purchaseType: 1,
      languageType: 2,
      dateRange: 3,
      playTime: 4,
    };

    reviewFilterDisplayPills[reviewFilterArrayPositions[type]] = null;
    return reviewFilterDisplayPills;
  }

  filterReviews(reviewFilters, reviewSection) {
    // code
  }

  updateReviewFilters(value, type) {
    const { reviewFilters } = this.state;

    value === 'all' ? value = null : null;
    if (type === 'startDateRange' || type === 'endDateRange') {
      reviewFilters.dateRange[type] = value;
    } else {
      reviewFilters[type] = value;
    }

    let updatedReviewFilterPills;
    type === 'playTime' && value.minimum === null && value.maximum === null ? this.removeReviewFilterPill(type) : null;
    value ? updatedReviewFilterPills = this.addReviewFilterPill(value, type) : updatedReviewFilterPills = this.removeReviewFilterPill(type);

    const mainReviewsList = this.filterReviews(reviewFilters, 'main');
    const recentReviewList = this.filterReviews(reviewFilters, 'recent');

    this.setState({
      reviewFilters: reviewFilters,
      reviewFilterDisplayPills: updatedReviewFilterPills,
    });
  }

  render() {
    if (this.state.reviews.allReviews) {
      const { reviews } = this.state;
      return (
        <Reviews>
          <LeftReviewsContainer />
          <CenterReviewsContainer>
            <ReviewsTitle>Customer Reviews</ReviewsTitle>
            <ReviewsBreakdown
              reviewStats={reviews.reviewStats}
              totalType={reviews.reviewStats.overallRatingGroup.type}
              recentType={reviews.reviewStats.recentRatingGroup.type}
              questionMarkImage={this.state.questionMarkImage} />
            <ReviewFilters
              reviewStats={reviews.reviewStats}
              steamLabsLogo={this.state.steamLabsLogo}
              updateReviewFilters={this.updateReviewFilters}
              questionMarkImage={this.state.questionMarkImageDark} />
            <ReviewListContainer>
              <MainReviewList />
              <RecentReviewList />
            </ReviewListContainer>
          </CenterReviewsContainer>
          <RightReviewsContainer />
        </Reviews>
      );
    } else {
      return (
        <Reviews>
          <LeftReviewsContainer />
          <CenterReviewsContainer>
            <div>Loading...</div>
            <img src="https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/user-profile-pictures/loading.gif" alt="loading gif"></img>
          </CenterReviewsContainer>
          <RightReviewsContainer />
        </Reviews>
      );
    }
  }
}

ReactDOM.render(<CustomerReviews />, document.getElementById('reviews'));
