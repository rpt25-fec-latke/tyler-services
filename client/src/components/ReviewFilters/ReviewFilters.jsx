import React from 'react';

import ReviewTypeFilter from './ReviewTypeFilter.jsx';
import PurchaseTypeFilter from './PurchaseTypeFilter.jsx';
import LanguageTypeFilter from './LanguageTypeFilter.jsx';
import DateRangeFilter from './DateRangeFilter.jsx';
import PlaytimeFilter from './PlaytimeFilter.jsx';

import { ReviewFiltersContainer, DisplayAsTitle } from '../../styled';

const ReviewFilters = ({ reviewStats, updateReviewFilters, steamLabsLogo }) => (
  <ReviewFiltersContainer>
    <ReviewTypeFilter reviewStats={reviewStats} updateReviewFilters={updateReviewFilters} />
    <PurchaseTypeFilter reviewStats={reviewStats} updateReviewFilters={updateReviewFilters} />
    <LanguageTypeFilter reviewStats={reviewStats} updateReviewFilters={updateReviewFilters} />
    <DateRangeFilter updateReviewFilters={updateReviewFilters} />
    <PlaytimeFilter steamLabsLogo={steamLabsLogo} updateReviewFilters={updateReviewFilters} />
    <div>
      <DisplayAsTitle>Display As:</DisplayAsTitle>
      <select value="Summary" onChange={(e) => { updateReviewFilters(e.target.value, 'displayType'); }}>
        <option value="summary">Summary</option>
        <option value="mostHelpful">Most Helpful</option>
        <option value="recent">Recent</option>
        <option value="funny">Funny</option>
      </select>
    </div>
  </ReviewFiltersContainer>
);

export default ReviewFilters;
