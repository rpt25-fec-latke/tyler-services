import React from 'react';

import { DropDownText } from '../../styled';

const ReviewTypeFilter = ({ reviewStats, updateRatingTypeFilters }) => (
  <div className="review_type_filter_menu">
    <DropDownText>Review Type</DropDownText>
    <div className="review_type_menu_flyout">
      <form>
        <input type="radio" id="review_type_all" value="all" name="reviewType" onChange={updateRatingTypeFilters} />
        <span>All</span>
        <span>{`(${reviewStats.totalReviewCount})`}</span>
        <br></br>
        <input type="radio" id="review_type_positive" value="positive" name="reviewType" onChange={updateRatingTypeFilters} />
        <span>Positive</span>
        <span>{`(${reviewStats.totalPositiveReviewCount})`}</span>
        <br></br>
        <input type="radio" id="review_type_negative" value="negative" name="reviewType" onChange={updateRatingTypeFilters} />
        <span>Negative</span>
        <span>{`(${reviewStats.totalReviewCount - reviewStats.totalPositiveReviewCount})`}</span>
      </form>
    </div>
  </div>
);

export default ReviewTypeFilter;
