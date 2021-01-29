import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';

import ReviewsBreakdown from './components/ReviewsBreakdown/ReviewsBreakdown.jsx';
import ReviewFilters from './components/ReviewFilters.jsx';
import HelpfulReviewList from './components/HelpfulReviewList.jsx';
import RecentReviewList from './components/RecentReviewList.jsx';

//----------------------------------------
// Styled Components
//----------------------------------------

const Reviews = styled.div`
  border-top: 1px solid black;
  margin-top: 0px;
`;

const ReviewsTitle = styled.h2`
  font-family: "Motiva Sans", Sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  margin: 0 0 10px;
  color: white;
  letter-spacing: 2px;
  font-weight: normal;
  padding-top: 2px;
`;

//----------------------------------------
// Component
//----------------------------------------

class CustomerReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGameId: 23,
      reviews: {},
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/?id=${this.state.currentGameId}`,
      success: (data) => {
        console.log(data.reviewStats);
        this.setState({
          reviews: data,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  render() {
    if (this.state.reviews.allReviews) {
      const { reviews } = this.state;
      return (
        <Reviews>
          <ReviewsTitle>Customer Reviews</ReviewsTitle>
          <ReviewsBreakdown reviewStats={reviews.reviewStats} totalType={reviews.reviewStats.overallRatingGroup.type} recentType={reviews.reviewStats.recentRatingGroup.type} />
          <ReviewFilters />
          <HelpfulReviewList />
          <RecentReviewList />
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

ReactDOM.render(<CustomerReviews />, document.getElementById('customerReviews'));
