import React from 'react';

import ReviewTypeFilter from './ReviewTypeFilter.jsx';
import PurchaseTypeFilter from './PurchaseTypeFilter.jsx';
import LanguageTypeFilter from './LanguageTypeFilter.jsx';
import DateRangeFilter from './DateRangeFilter.jsx';
import PlaytimeFilter from './PlaytimeFilter.jsx';
import ReviewFilterPill from './ReviewFilterPill.jsx';
import FilteredReviewsStatBreakdown from './FilteredReviewsStatBreakdown.jsx';

import {
  ReviewFiltersContainer,
  MenuOptions,
  DisplayAsContainer,
  DisplayAsTitle,
  DisplayAsOptions,
  ShowGraphContainer,
  ShowGraphText,
  ShowGraphArrow,
  FilterInfoContainer,
  ReviewFilterPillsContainer,
  ReviewFilterPillsTitle,
} from '../../styled';

const ReviewFilters = ({ reviewStats, updateReviewFilters, updateDisplayAs, steamLabsLogo, questionMarkImage, reviewFilterDisplayPills, removeReviewFilterPill, filteredReviewStats, numFilterPills }) => (
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
    <FilterInfoContainer>
      <ReviewFilterPillsContainer>
        <ReviewFilterPillsTitle>
          {numFilterPills > 0 ? 'Filters' : null}
        </ReviewFilterPillsTitle>
        {reviewFilterDisplayPills.map((pill, i) => {
          if (pill) {
            return (
              <ReviewFilterPill key={i} index={i} pill={pill} removeReviewFilterPill={removeReviewFilterPill} />
            );
          }
        })}
      </ReviewFilterPillsContainer>
      <FilteredReviewsStatBreakdown reviewTypeFilter={reviewFilterDisplayPills[0]} filteredReviewStats={filteredReviewStats} />
    </FilterInfoContainer>
  </ReviewFiltersContainer>
);

export default ReviewFilters;
