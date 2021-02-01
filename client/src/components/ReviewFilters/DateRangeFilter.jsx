import React from 'react';

import { DateRangeContainer, DateRangeTitle, DateRangeFlyoutMenu, DownArrow } from '../../styled';

const DateRangeFilter = ({ updateReviewFilters }) => (
  <DateRangeContainer>
    <DateRangeTitle>
      Date Range
      <DownArrow className="date_down_arrow">&#9662;</DownArrow>
      <DateRangeFlyoutMenu className="date_range_flyout">
        <form>
          <span>Start date:</span>
          <input type="date" id="start_date" onChange={(e) => { updateReviewFilters(e.target.value, 'startDateRange'); }} />
          <br></br>
          <span>End date:</span>
          <input type="date" id="end_date" onChange={(e) => { updateReviewFilters(e.target.value, 'endDateRange'); }} />
        </form>
      </DateRangeFlyoutMenu>
    </DateRangeTitle>
  </DateRangeContainer>
);

export default DateRangeFilter;
