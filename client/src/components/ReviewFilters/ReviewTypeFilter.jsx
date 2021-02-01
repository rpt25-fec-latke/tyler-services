import React from 'react';

import { ReviewTypeContainer, ReviewTypeTitle, ReviewTypeFlyoutMenu, DownArrow, FlyoutMenuText, FlyoutMenuStat } from '../../styled';

const ReviewTypeFilter = ({ reviewStats, updateReviewFilters }) => (
  <ReviewTypeContainer>
    <ReviewTypeTitle>
      Review Type
      <DownArrow className="review_type_down_arrow">&#9662;</DownArrow>
      <ReviewTypeFlyoutMenu className="review_type_flyout">
        <form>
          <input type="radio" value="all" name="reviewType" onChange={(e) => { updateReviewFilters(e.target.value, 'reviewType'); }} />
          <FlyoutMenuText>All</FlyoutMenuText>
          <FlyoutMenuStat>{`(${reviewStats.totalReviewCount})`}</FlyoutMenuStat>
          <br></br>
          <input type="radio" value="positive" name="reviewType" onChange={(e) => { updateReviewFilters(e.target.value, 'reviewType'); }} />
          <FlyoutMenuText>Positive</FlyoutMenuText>
          <FlyoutMenuStat>{`(${reviewStats.totalPositiveReviewCount})`}</FlyoutMenuStat>
          <br></br>
          <input type="radio" value="negative" name="reviewType" onChange={(e) => { updateReviewFilters(e.target.value, 'reviewType'); }} />
          <FlyoutMenuText>Negative</FlyoutMenuText>
          <FlyoutMenuStat>{`(${reviewStats.totalReviewCount - reviewStats.totalPositiveReviewCount})`}</FlyoutMenuStat>
        </form>
      </ReviewTypeFlyoutMenu>
    </ReviewTypeTitle>
  </ReviewTypeContainer>
);

export default ReviewTypeFilter;
