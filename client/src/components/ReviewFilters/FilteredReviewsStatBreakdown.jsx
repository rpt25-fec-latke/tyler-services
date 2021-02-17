import React from 'react';

import { FilteredReviewsStatContainer, FilteredReviewsStatNormalText, FilteredReviewsStatBoldText, FilteredReviewsStatRatingGroup } from '../../styled';

const FilteredReviewsStatBreakdown = ({ reviewTypeFilter, filteredReviewStats: { totalReviews, ratingGroupInfo: { type, ratingGroup } } }) => {
  if (!reviewTypeFilter) {
    return (
      <FilteredReviewsStatContainer>
        <FilteredReviewsStatNormalText>
          Showing
        </FilteredReviewsStatNormalText>
        <FilteredReviewsStatBoldText className="review_filters_section_review_count">
          {totalReviews}
        </FilteredReviewsStatBoldText>
        <FilteredReviewsStatNormalText className="opening_review_stat_bracket">
          reviews that match the filters above
          {ratingGroup ? ' (' : null}
        </FilteredReviewsStatNormalText>
        <FilteredReviewsStatRatingGroup type={type} className="review_filters_section_rating_group">
          {ratingGroup ? ratingGroup : null}
        </FilteredReviewsStatRatingGroup>
        <FilteredReviewsStatNormalText className="closing_review_stat_bracket">
          {ratingGroup ? ')' : null}
        </FilteredReviewsStatNormalText>
      </FilteredReviewsStatContainer>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default FilteredReviewsStatBreakdown;
