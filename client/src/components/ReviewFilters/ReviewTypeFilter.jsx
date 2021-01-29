import React from 'react';

const ReviewTypeFilter = ({ reviewStats, updateRatingTypeFilters }) => (
  <div className="review_type_filter_menu">
    <div className="review_type_title">Review Type</div>
    <div className="menu_flyout">
      <form>
        <label htmlFor="review_type_all">
          All
          <input type="radio" id="review_type_all" value="all" name="reviewType" onChange={updateRatingTypeFilters}></input>
        </label>
        <span>{`(${reviewStats.totalReviewCount})`}</span>
        <label htmlFor="review_type_positive">
          Positive
          <input type="radio" id="review_type_positive" value="positive" name="reviewType" onChange={updateRatingTypeFilters}></input>
        </label>
        <span>{`(${reviewStats.totalPositiveReviewCount})`}</span>
        <label htmlFor="review_type_negative">
          Negative
          <input type="radio" id="review_type_negative" value="negative" name="reviewType" onChange={updateRatingTypeFilters}></input>
        </label>
        <span>{`(${reviewStats.totalReviewCount - reviewStats.totalPositiveReviewCount})`}</span>
      </form>
    </div>
  </div>
);

export default ReviewTypeFilter;
