import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import ReviewsBreakdown from './components/ReviewsBreakdown.jsx';
import ReviewFilters from './components/ReviewFilters.jsx';
import HelpfulReviewList from './components/HelpfulReviewList.jsx';
import RecentReviewList from './components/RecentReviewList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGameId: 1,
      reviews: [],
      reviewStats: [],
    };
    this.calculateReviewStats = this.calculateReviewStats.bind(this);
  }

  componentDidMount() {
    const { currentGameId } = this.state;
    $.ajax({
      method: 'GET',
      url: `/reviews?id=${currentGameId}`,
      success: (data) => {
        console.log(data);
        const reviewStats = this.calculateReviewStats(data);
        this.setState({
          reviews: data,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  calculateReviewStats(reviews) {
    const reviewStats = [];
    const { allReviews } = reviews;
    const { mostRecentLastThirty } = reviews;
    reviewStats.totalReviewCount = allReviews.length;
    reviewStats.lastThirtyCount = 0;
  }

  render() {
    return (
      <div className="reviews_section">
        <h2 className="customer_reviews_header">Customer Reviews</h2>
        <ReviewsBreakdown />
        <ReviewFilters />
        <HelpfulReviewList />
        <RecentReviewList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
