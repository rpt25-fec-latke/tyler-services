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
      currentGameId: 68,
      reviews: {
        reviewStats: {
          overallRatingGroup: null,
          recentRatingGroup: null,
          totalReviewCount: 0,
          totalRecentReviewCount: 0,
        },
      },
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: `/reviews?id=${this.state.currentGameId}`,
      success: (data) => {
        this.setState({
          reviews: data,
        });
        console.log(this.state);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  render() {
    return (
      <div className="reviews_section">
        <h2 className="customer_reviews_header">Customer Reviews</h2>
        <ReviewsBreakdown reviewStats={this.state.reviews.reviewStats} />
        <ReviewFilters />
        <HelpfulReviewList />
        <RecentReviewList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
