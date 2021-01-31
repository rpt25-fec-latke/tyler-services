import React from 'react';
import styled from 'styled-components';

import ReviewTypeFilter from './ReviewTypeFilter.jsx';
import PurchaseTypeFilter from './PurchaseTypeFilter.jsx';
import LanguageTypeFilter from './LanguageTypeFilter.jsx';
import DateRangeFilter from './DateRangeFilter.jsx';
import PlaytimeFilter from './PlaytimeFilter.jsx';

const ReviewFilters = ({ reviewStats, updateRatingTypeFilters, updatePurchaseTypeFilters, updateLanguageTypeFilters, steamLabsLogo }) => (
  <div className="review_filters">
    <ReviewTypeFilter reviewStats={reviewStats} updateRatingTypeFilters={updateRatingTypeFilters} />
    <PurchaseTypeFilter reviewStats={reviewStats} updatePurchaseTypeFilters={updatePurchaseTypeFilters} />
    <LanguageTypeFilter reviewStats={reviewStats} updateLanguageTypeFilters={updateLanguageTypeFilters} />
    <DateRangeFilter />
    <PlaytimeFilter steamLabsLogo={steamLabsLogo} />
  </div>
);

export default ReviewFilters;

// For aligning buttons left: https://stackoverflow.com/questions/4457609/what-is-the-best-way-to-left-align-radio-buttons-on-top-of-each-other
