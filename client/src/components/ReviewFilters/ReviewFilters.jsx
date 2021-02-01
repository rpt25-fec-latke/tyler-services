import React from 'react';

import ReviewTypeFilter from './ReviewTypeFilter.jsx';
import PurchaseTypeFilter from './PurchaseTypeFilter.jsx';
import LanguageTypeFilter from './LanguageTypeFilter.jsx';
import DateRangeFilter from './DateRangeFilter.jsx';
import PlaytimeFilter from './PlaytimeFilter.jsx';

import { ReviewFiltersContainer, MenuOptions, DisplayAsContainer, DisplayAsTitle, DisplayAsOptions } from '../../styled';

const ReviewFilters = ({ reviewStats, updateReviewFilters, steamLabsLogo, questionMarkImage }) => (
  <ReviewFiltersContainer>
    <MenuOptions>
      <ReviewTypeFilter reviewStats={reviewStats} updateReviewFilters={updateReviewFilters} />
      <PurchaseTypeFilter reviewStats={reviewStats} updateReviewFilters={updateReviewFilters} questionMarkImage={questionMarkImage} />
      <LanguageTypeFilter reviewStats={reviewStats} updateReviewFilters={updateReviewFilters} questionMarkImage={questionMarkImage} />
      <DateRangeFilter updateReviewFilters={updateReviewFilters} />
      <PlaytimeFilter steamLabsLogo={steamLabsLogo} updateReviewFilters={updateReviewFilters} />
      <DisplayAsContainer>
        <DisplayAsTitle>Display As:</DisplayAsTitle>
        <DisplayAsOptions defaultValue="Summary" onChange={(e) => { updateReviewFilters(e.target.value, 'displayType'); }}>
          <option value="summary">Summary</option>
          <option value="mostHelpful">Most Helpful</option>
          <option value="recent">Recent</option>
          <option value="funny">Funny</option>
        </DisplayAsOptions>
      </DisplayAsContainer>
    </MenuOptions>
  </ReviewFiltersContainer>
);

export default ReviewFilters;
