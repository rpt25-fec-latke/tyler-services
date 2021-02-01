import React from 'react';
import styled from 'styled-components';

import { ReviewsBreakdownContainer, OverallReviews, RecentReviews, SectionTitle, TotalRatingGroup, RecentRatingGroup, ToolTip, ReviewCount, QuestionMarkImage } from '../../styled';

const ReviewsBreakdown = ({ reviewStats, totalType, recentType, questionMarkImage }) => (
  <ReviewsBreakdownContainer>
    <OverallReviews>
      <SectionTitle>Overall Reviews:</SectionTitle>
      <TotalRatingGroup className="total_rating_group" type={totalType}>
        {`${reviewStats.enoughTotalReviews ? reviewStats.overallRatingGroup.ratingGroup : `${reviewStats.totalReviewCount} user reviews`}`}
        <ToolTip className="tooltip">{reviewStats.overallReviewsRatingGroupHoverMessage}</ToolTip>
      </TotalRatingGroup>
      <ReviewCount className="total_review_count">{`(${reviewStats.totalReviewCount} reviews)`}</ReviewCount>
      <QuestionMarkImage src={questionMarkImage} alt="question mark"></QuestionMarkImage>
      <ToolTip className="tooltip">This summary uses only reviews written by customers that purchased the game directly from Steam.</ToolTip>
    </OverallReviews>
    <RecentReviews>
      <SectionTitle>Recent Reviews:</SectionTitle>
      <RecentRatingGroup className="recent_rating_group" type={recentType}>
        {`${reviewStats.enoughRecentReviews ? reviewStats.recentRatingGroup.ratingGroup : `${reviewStats.totalRecentReviewCount} user reviews`}`}
        <ToolTip className="tooltip">{reviewStats.recentReviewsRatingGroupHoverMessage}</ToolTip>
      </RecentRatingGroup>
      <ReviewCount className="recent_review_count">{`(${reviewStats.totalRecentReviewCount} reviews)`}</ReviewCount>
      <QuestionMarkImage src={questionMarkImage} alt="question mark"></QuestionMarkImage>
      <ToolTip className="tooltip">This summary uses only reviews written by customers that purchased the game directly from Steam.</ToolTip>
    </RecentReviews>
  </ReviewsBreakdownContainer>
);

export default ReviewsBreakdown;
