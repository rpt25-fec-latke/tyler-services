import React from 'react';

import { ReviewTypeContainer, ReviewTypeTitle, ReviewTypeFlyoutMenu, DownArrow } from '../../styled';

const ReviewTypeFilter = ({ reviewStats, updateReviewFilters }) => (
  <ReviewTypeContainer>
    <ReviewTypeTitle>
      Review Type
      <DownArrow>&#9660;</DownArrow>
    </ReviewTypeTitle>
    <div className="review_type_menu_flyout">
      <form>
        <input type="radio" value="all" name="reviewType" checked onChange={(e) => { updateReviewFilters(e.target.value, 'reviewType'); }} />
        <span>All</span>
        <span>{`(${reviewStats.totalReviewCount})`}</span>
        <br></br>
        <input type="radio" value="positive" name="reviewType" onChange={(e) => { updateReviewFilters(e.target.value, 'reviewType'); }} />
        <span>Positive</span>
        <span>{`(${reviewStats.totalPositiveReviewCount})`}</span>
        <br></br>
        <input type="radio" value="negative" name="reviewType" onChange={(e) => { updateReviewFilters(e.target.value, 'reviewType'); }} />
        <span>Negative</span>
        <span>{`(${reviewStats.totalReviewCount - reviewStats.totalPositiveReviewCount})`}</span>
      </form>
    </div>
  </ReviewTypeContainer>
);

export default ReviewTypeFilter;
