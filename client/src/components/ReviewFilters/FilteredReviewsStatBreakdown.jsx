import React from 'react';

import { FilteredReviewsStatContainer, FilteredReviewsStatNormalText, FilteredReviewsStatBoldText, FilteredReviewsStatRatingGroup } from '../../styled';

const FilteredReviewsStatBreakdown = ({ reviewTypeFilter, filteredReviewStats: { totalReviews, ratingGroupInfo: { type, ratingGroup } } }) => {
  if (!reviewTypeFilter) {
    return (
      <FilteredReviewsStatContainer>
        <FilteredReviewsStatNormalText>
          Showing
        </FilteredReviewsStatNormalText>
        <FilteredReviewsStatBoldText>
          {totalReviews}
        </FilteredReviewsStatBoldText>
        <FilteredReviewsStatNormalText>
          reviews that match the filters above
          {ratingGroup ? ' (' : null}
        </FilteredReviewsStatNormalText>
        <FilteredReviewsStatRatingGroup type={type}>
          {ratingGroup ? ratingGroup : null}
        </FilteredReviewsStatRatingGroup>
        <FilteredReviewsStatNormalText>
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
