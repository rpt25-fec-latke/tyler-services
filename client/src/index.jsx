import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';

import ReviewsBreakdown from './components/ReviewsBreakdown/ReviewsBreakdown.jsx';
import ReviewFilters from './components/ReviewFilters/ReviewFilters.jsx';
import HelpfulReviewList from './components/MainReviewList/MainReviewList.jsx';
import RecentReviewList from './components/RecentReviewList/RecentReviewList.jsx';

import { Reviews, LeftReviewsContainer, CenterReviewsContainer, RightReviewsContainer, ReviewsTitle } from './styled';

class CustomerReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGameId: 85,
      reviews: {},
      reviewDisplayStatus: 'default',
      reviewFilters: {
        type: 'all',
        language: 'EN',
      },
      questionMarkImage: 'https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/user-profile-pictures/icon_questionmark.png',
      questionMarkImageDark: 'https://store.cloudflare.steamstatic.com/public/shared/images/ico/icon_questionmark_dark.png',
      steamLabsLogo: 'https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/steam_labs_logo.svg',
    };
    this.updateReviewFilters = this.updateReviewFilters.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/?id=${this.state.currentGameId}`,
      success: (data) => {
        console.log(data);
        this.setState({
          reviews: data,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateReviewFilters(value, type) {
    console.log(value, type);
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
            <HelpfulReviewList />
            <RecentReviewList />
          </CenterReviewsContainer>
          <RightReviewsContainer />
        </Reviews>
      );
    } else {
      return (
        <div>
          <div>Loading...</div>
          <img src="https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/user-profile-pictures/loading.gif" alt="loading gif"></img>
        </div>
      );
    }
  }
}

ReactDOM.render(<CustomerReviews />, document.getElementById('reviews'));
