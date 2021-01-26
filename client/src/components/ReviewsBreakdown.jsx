import React from 'react';

const ReviewsBreakdown = ({ reviewStats }) => (
  <div className="reviews_breakdown">
    <div className="overall_reviews_summary">
      <div className="overall_reviews_title" id="no_border">Overall Reviews:</div>
      <span className="tooltip total_rating_group" id={reviewStats.enoughTotalReviews ? reviewStats.overallRatingGroup.toLowerCase().split(' ').join('_') : 'na'}>
        {`${reviewStats.enoughTotalReviews ? reviewStats.overallRatingGroup : `${reviewStats.totalReviewCount} user reviews`}`}
        <span className="tooltiptext" id="total_rating">{reviewStats.overallReviewsRatingGroupHoverMessage}</span>
      </span>
      <span className="review_count" id="total">{` (${reviewStats.totalReviewCount} reviews) `}</span>
      <span className="tooltip">
        <img className="question_mark" src="https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/user-profile-pictures/icon_questionmark.png" alt="question mark"></img>
        <span className="tooltiptext" id="total question_mark">This summary uses only reviews written by customers that purchased the game directly from Steam.</span>
      </span>
    </div>
    <div className="recent_reviews_summary">
      <div className="recent_reviews_title" id="no_border">Recent Reviews:</div>
      <span className="tooltip recent_rating_group" id={reviewStats.enoughRecentReviews ? reviewStats.recentRatingGroup.toLowerCase().split(' ').join('_') : 'na'}>
        {`${reviewStats.enoughRecentReviews ? reviewStats.recentRatingGroup : `${reviewStats.totalRecentReviewCount} user reviews`}`}
        <span className="tooltiptext" id="recent rating">{reviewStats.recentReviewsRatingGroupHoverMessage}</span>
      </span>
      <span className="review_count" id="recent">{` (${reviewStats.totalRecentReviewCount} reviews) `}</span>
      <span className="tooltip">
        <img className="question_mark" src="https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/user-profile-pictures/icon_questionmark.png" alt="question mark"></img>
        <span className="tooltiptext" id="recent question_mark">This summary uses only reviews written by customers that purchased the game directly from Steam.</span>
      </span>
    </div>
  </div>
);

export default ReviewsBreakdown;
