import React from 'react';

import { DropDownText } from '../../styled';

const DateRangeFilter = (props) => (
  <div className="date_range_filter_menu">
    <DropDownText>Date Range</DropDownText>
    <form>
      <label htmlFor="start_date">
        Start date:
        <input type="date" id="start_date" />
      </label>
      <br></br>
      <label htmlFor="end_date">
        End date:
        <input type="date" id="end_date" />
      </label>
    </form>
  </div>
);

export default DateRangeFilter;
