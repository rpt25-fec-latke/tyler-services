import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGameId: 1,
      reviews: [],
      totalReviews: 0,
      totalReviewsLastThirty: 0,

    }
  }

  calculateReviewStats() {
    //code
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: `/reviews?id=${this.state.currentGameId}`,
      success: (data) => {
        console.log(data.reviews.allReviews);
        this.setState({
          reviews: data
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div className="review_section">
        <h2 className="customer_review_header">Customer Reviews</h2>
        <div className="reviews_breakdown">
          <div className="overall_reviews_summary">Overall Reviews:
            <div>
              1800
            </div>
          </div>
          <div className="recent_reviews_summary">Recent Reviews:
          <div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));