import React from 'react';
import styled from 'styled-components';

//----------------------------------------
// Styled Components
//----------------------------------------

const OverallReviews = styled.div`
  background-color: #2a475e;
`;

const RecentReviews = styled.div`
  background-color: #416781;
`;

const SectionTitle = styled.div`
  margin-left: 0px;
  padding-left: 0px;
  color: rgb(229, 229, 229);
  font-family: "Motiva Sans", sans-serif;
  font-size: 15px;
  font-weight: normal;
`;

const TotalRatingGroup = styled.span`
  cursor: help;
  font-weight: bold;
  font-size: 17px;
  line-height: 9px;
  text-shadow: 1px 1px rgba( 0, 0, 0, 0.2 );
  cursor: help;
  color: ${({ type }) => {
    if (type === 'positive') {
      return '#66C0F4';
    } else if (type === 'mixed') {
      return '#a8926a';
    } else if (type === 'negative') {
      return '#c35c2c';
    } else {
      return '#929396';
    }
  }};
`;

const RecentRatingGroup = styled.span`
  cursor: help;
  font-weight: bold;
  font-size: 17px;
  line-height: 9px;
  text-shadow: 1px 1px rgba( 0, 0, 0, 0.2 );
  cursor: help;
  color: ${({ type }) => {
    if (type === 'positive') {
      return '#66C0F4';
    } else if (type === 'mixed') {
      return '#a8926a';
    } else if (type === 'negative') {
      return '#c35c2c';
    } else {
      return '#929396';
    }
  }};
`;

const ToolTip = styled.span`
  position: relative;
  display: inline-block;
  visibility: hidden;
  width: 275px;
  height: auto;
  width: max-content;
  max-width: 275px;
  padding: 5px;
  left: 2px;
  bottom: 25px;
  background-color:#c2c2c2;
  color: #3d3d3f;
  box-shadow: 0 0 5px #000;
  opacity: 0;
  position: absolute;
  z-index: 1500;
  pointer-events: auto;
  font-size: 11px;
  text-shadow: none;
  font-weight: normal;
  border-radius: 3px;
  white-space: normal;
  transition: opacity .5s;
  &:hover {
    visibility: visible;
    opacity: 1;
  }
`;

const ToolTipText = styled.span`
  visibility: hidden;
  width: 275px;
  height: auto;
  width: max-content;
  max-width: 275px;
  padding: 5px;
  left: 2px;
  bottom: 25px;
  background-color:#c2c2c2;
  color: #3d3d3f;
  box-shadow: 0 0 5px #000;
  opacity: 0;
  position: absolute;
  z-index: 1500;
  pointer-events: auto;
  font-size: 11px;
  text-shadow: none;
  font-weight: normal;
  border-radius: 3px;
  white-space: normal;
  transition: opacity .5s;
`;

const ReviewCount = styled.span`
  color: rgb(139, 166, 182);
  font-family: Arial, Helvetica, sans-serif ;
  font-size: 12px;
`;

const QuestionMark = styled.img`
  visibility: visible;
  opacity: 1;
`;

//----------------------------------------
// React Component
//----------------------------------------

const ReviewsBreakdown = ({ reviewStats, totalType, recentType }) => (
  <div className="reviews_breakdown">
    <OverallReviews>
      <SectionTitle>Overall Reviews:</SectionTitle>
      <TotalRatingGroup type={totalType}>
        {`${reviewStats.enoughTotalReviews ? reviewStats.overallRatingGroup.ratingGroup : `${reviewStats.totalReviewCount} user reviews`}`}
        <ToolTipText>{reviewStats.overallReviewsRatingGroupHoverMessage}</ToolTipText>
      </TotalRatingGroup>
      <ReviewCount>{` (${reviewStats.totalReviewCount} reviews) `}</ReviewCount>
      <ToolTip>
        <QuestionMark src="https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/user-profile-pictures/icon_questionmark.png" alt="question mark"></QuestionMark>
        <ToolTipText>This summary uses only reviews written by customers that purchased the game directly from Steam.</ToolTipText>
      </ToolTip>
    </OverallReviews>
    <RecentReviews>
      <SectionTitle>Recent Reviews:</SectionTitle>
      <RecentRatingGroup type={recentType}>
        {`${reviewStats.enoughRecentReviews ? reviewStats.recentRatingGroup.ratingGroup : `${reviewStats.totalRecentReviewCount} user reviews`}`}
        <ToolTipText>{reviewStats.recentReviewsRatingGroupHoverMessage}</ToolTipText>
      </RecentRatingGroup>
      <ReviewCount>{` (${reviewStats.totalRecentReviewCount} reviews) `}</ReviewCount>
      <ToolTip>
        <QuestionMark src="https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/user-profile-pictures/icon_questionmark.png" alt="question mark"></QuestionMark>
        <ToolTipText>This summary uses only reviews written by customers that purchased the game directly from Steam.</ToolTipText>
      </ToolTip>
    </RecentReviews>
  </div>
);

export default ReviewsBreakdown;
