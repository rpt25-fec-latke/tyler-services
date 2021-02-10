import React from 'react';

import { FilteredReviewsStatContainer, FilteredReviewsStatNormalText, FilteredReviewsStatBoldText, FilteredReviewsStatRatingGroup } from '../../styled';

const FilteredReviewsStatBreakdown = ({ reviewTypeFilter, filteredReviewStats }) => {
  if (!reviewTypeFilter) {
    return (
      <FilteredReviewsStatContainer>
        <FilteredReviewsStatNormalText>
          Showing
        </FilteredReviewsStatNormalText>
        <FilteredReviewsStatBoldText>
          {filteredReviewStats.totalReviews}
        </FilteredReviewsStatBoldText>
        <FilteredReviewsStatNormalText>
          reviews that match the filters above (
        </FilteredReviewsStatNormalText>
        <FilteredReviewsStatRatingGroup type={filteredReviewStats.ratingGroupInfo.type}>
          {filteredReviewStats.ratingGroupInfo.ratingGroup}
        </FilteredReviewsStatRatingGroup>
        <FilteredReviewsStatNormalText>
          )
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
