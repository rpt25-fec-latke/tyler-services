import React from 'react';

import ReviewTypeFilter from './ReviewTypeFilter.jsx';
import PurchaseTypeFilter from './PurchaseTypeFilter.jsx';
import LanguageTypeFilter from './LanguageTypeFilter.jsx';
import DateRangeFilter from './DateRangeFilter.jsx';
import PlaytimeFilter from './PlaytimeFilter.jsx';

import { ReviewFiltersContainer, MenuOptions, DisplayAsContainer, DisplayAsTitle, DisplayAsOptions, ShowGraphContainer, ShowGraphText, ShowGraphArrow } from '../../styled';

const ReviewFilters = ({ reviewStats, updateReviewFilters, updateDisplayAs, steamLabsLogo, questionMarkImage }) => (
  <ReviewFiltersContainer>
    <MenuOptions>
      <ReviewTypeFilter reviewStats={reviewStats} updateReviewFilters={updateReviewFilters} />
      <PurchaseTypeFilter reviewStats={reviewStats} updateReviewFilters={updateReviewFilters} questionMarkImage={questionMarkImage} />
      <LanguageTypeFilter reviewStats={reviewStats} updateReviewFilters={updateReviewFilters} questionMarkImage={questionMarkImage} />
      <DateRangeFilter updateReviewFilters={updateReviewFilters} />
      <PlaytimeFilter steamLabsLogo={steamLabsLogo} updateReviewFilters={updateReviewFilters} />
      <DisplayAsContainer>
        <DisplayAsTitle>Display As:</DisplayAsTitle>
        <DisplayAsOptions className="display_as" defaultValue="Summary" onChange={(e) => { updateDisplayAs(e.target.value); }}>
          <option value="summary">Summary</option>
          <option value="mostHelpful">Most Helpful</option>
          <option value="recent">Recent</option>
          <option value="funny">Funny</option>
        </DisplayAsOptions>
      </DisplayAsContainer>
      <ShowGraphContainer>
        <ShowGraphText>
          Show graph
          <ShowGraphArrow className="show_graph_arrow">&#65086;</ShowGraphArrow>
        </ShowGraphText>
      </ShowGraphContainer>
    </MenuOptions>
  </ReviewFiltersContainer>
);

export default ReviewFilters;
