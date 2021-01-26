import React from 'react';

const ReviewsBreakdown = ({ reviewStats }) => (
  <div className="reviews_breakdown">
    <div className="overall_reviews_summary">
      <div id="no-border">Overall Reviews:</div>
      <span>{`${reviewStats.overallRatingGroup}`}</span>
      <span>{` (${reviewStats.totalReviewCount} reviews)`}</span>
    </div>
    <div className="recent_reviews_summary">
      <div id="no-border">Recent Reviews:</div>
      <span>{`${reviewStats.recentRatingGroup}`}</span>
      <span>{` (${reviewStats.totalRecentReviewCount} reviews)`}</span>
    </div>
  </div>
);

export default ReviewsBreakdown;
