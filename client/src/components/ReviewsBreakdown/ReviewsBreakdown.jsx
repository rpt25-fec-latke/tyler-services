import React from 'react';
import styled from 'styled-components';

import { OverallReviews, RecentReviews, SectionTitle, TotalRatingGroup, RecentRatingGroup, ToolTip, ReviewCount, QuestionMark } from './ReviewsBreakdownStyledComponents';

const ReviewsBreakdown = ({ reviewStats, totalType, recentType }) => (
  <div className="reviews_breakdown">
    <OverallReviews>
      <SectionTitle>Overall Reviews:</SectionTitle>
      <TotalRatingGroup className="total_rating_group" type={totalType}>
        {`${reviewStats.enoughTotalReviews ? reviewStats.overallRatingGroup.ratingGroup : `${reviewStats.totalReviewCount} user reviews`}`}
        <ToolTip className="tooltip">{reviewStats.overallReviewsRatingGroupHoverMessage}</ToolTip>
      </TotalRatingGroup>
      <ReviewCount className="total_review_count">{` (${reviewStats.totalReviewCount} reviews) `}</ReviewCount>
      <QuestionMark src="https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/user-profile-pictures/icon_questionmark.png" alt="question mark"></QuestionMark>
      <ToolTip>
        <ToolTip>This summary uses only reviews written by customers that purchased the game directly from Steam.</ToolTip>
      </ToolTip>
    </OverallReviews>
    <RecentReviews>
      <SectionTitle>Recent Reviews:</SectionTitle>
      <RecentRatingGroup className="recent_rating_group" type={recentType}>
        {`${reviewStats.enoughRecentReviews ? reviewStats.recentRatingGroup.ratingGroup : `${reviewStats.totalRecentReviewCount} user reviews`}`}
        <ToolTip className="tooltip">{reviewStats.recentReviewsRatingGroupHoverMessage}</ToolTip>
      </RecentRatingGroup>
      <ReviewCount className="recent_review_count">{` (${reviewStats.totalRecentReviewCount} reviews) `}</ReviewCount>
      <QuestionMark src="https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/user-profile-pictures/icon_questionmark.png" alt="question mark"></QuestionMark>
      <ToolTip className="tool_tip">
        <ToolTip>This summary uses only reviews written by customers that purchased the game directly from Steam.</ToolTip>
      </ToolTip>
    </RecentReviews>
  </div>
);

export default ReviewsBreakdown;
