import React from 'react';

const ReviewsBreakdown = (props) => (
  <div className="reviews_breakdown">
    <div className="overall_reviews_summary">
      <div id="no-border">Overall Reviews:</div>
      <span>{`${props.reviewStats.overallRatingGroup}`}</span>
      <span>{` (${props.reviewStats.totalReviewCount} reviews)`}</span>
    </div>
    <div className="recent_reviews_summary">
      <div id="no-border">Recent Reviews:</div>
      <span>{`${props.reviewStats.recentRatingGroup}`}</span>
      <span>{` (${props.reviewStats.totalRecentReviewCount} reviews)`}</span>
    </div>
  </div>
);

export default ReviewsBreakdown;
