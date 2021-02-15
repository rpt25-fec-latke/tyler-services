import React from 'react';
import { shallow } from 'enzyme';

import ReviewFilters from './ReviewFilters.jsx';
import ReviewTypeFilter from './ReviewTypeFilter.jsx';
import PurchaseTypeFilter from './PurchaseTypeFilter.jsx';
import LanguageTypeFilter from './LanguageTypeFilter.jsx';
import DateRangeFilter from './DateRangeFilter.jsx';
import PlaytimeFilter from './PlaytimeFilter.jsx';
import FilteredReviewsStatBreakdown from './FilteredReviewsStatBreakdown.jsx';

describe('Review type filter component', () => {
  it('Should call the "updateReviewFilters" function upon a change event occurring on one of the radio input elements and should also render the reviewStats passed down to it correctly', () => {
    const testFunc = jest.fn();
    const fakeEvent = { target: { value: 'all' } };
    const fakeProps = {
      totalReviewCount: 47,
      totalPositiveReviewCount: 34,
    };
    const component = shallow(<ReviewTypeFilter updateReviewFilters={testFunc} reviewStats={fakeProps} />);

    component
      .find('.all_reviews_filter')
      .simulate('change', fakeEvent);

    expect(testFunc).toHaveBeenCalled();
    expect(component.find('.all_reviews_count_stat').text()).toEqual('(47)');
    expect(component.find('.positive_reviews_count_stat').text()).toEqual('(34)');
    expect(component.find('.negative_reviews_count_stat').text()).toEqual('(13)');
  });
});

describe('Purchase type filter component', () => {
  it('Should call the "updateReviewFilters" function upon a change event occurring on one of the radio input elements and should also render the reviewStats passed down to it correctly', () => {
    const testFunc = jest.fn();
    const fakeEvent = { target: { value: 'all' } };
    const fakeProps = {
      totalReviewCount: 27,
      purchaseViaSteamCount: 12,
    };
    const component = shallow(<PurchaseTypeFilter updateReviewFilters={testFunc} reviewStats={fakeProps} />);

    component
      .find('.purchase_type_all_filter')
      .simulate('change', fakeEvent);

    expect(testFunc).toHaveBeenCalled();
    expect(component.find('.purchase_type_all_count_stat').text()).toEqual('(27)');
    expect(component.find('.purchase_type_steam_count_stat').text()).toEqual('(12)');
    expect(component.find('.purchase_type_other_count_stat').text()).toEqual('(15)');
  });
});

describe('Language type filter component', () => {
  it('Should call the "updateReviewFilters" function upon a change event occurring on one of the radio input elements and should also render the reviewStats passed down to it correctly', () => {
    const testFunc = jest.fn();
    const fakeEvent = { target: { value: 'all' } };
    const fakeProps = {
      totalReviewCount: 12,
      englishLanguageReviewCount: 4,
    };
    const component = shallow(<LanguageTypeFilter updateReviewFilters={testFunc} reviewStats={fakeProps} />);

    component
      .find('.all_languages_filter')
      .simulate('change', fakeEvent);

    expect(testFunc).toHaveBeenCalled();
    expect(component.find('.all_languages_count_stat').text()).toEqual('(12)');
    expect(component.find('.your_language_count_stat').text()).toEqual('(4)');
  });
});

describe('Date range filter component', () => {
  it('Should call the "updateReviewFilters" function upon a change event occurring on one of the date input elements', () => {
    const testFunc = jest.fn();
    const fakeEvent = { target: { value: 'all' } };
    const component = shallow(<DateRangeFilter updateReviewFilters={testFunc} />);

    component
      .find('.start_date_input')
      .simulate('change', fakeEvent);

    expect(testFunc).toHaveBeenCalled();
  });
});

describe('Filtered reviews stat breakdown component', () => {
  it('Should properly render when there is no review group selected', () => {
    const fakeProps = {
      totalReviews: 44,
      ratingGroupInfo: {
        ratingGroup: 'Very Positive',
      },
    };
    const component = shallow(<FilteredReviewsStatBreakdown reviewTypeFilter={null} filteredReviewStats={fakeProps} />);

    expect(component.find('.review_filters_section_review_count').text()).toEqual('44');
    expect(component.find('.opening_review_stat_bracket').text()).toEqual('reviews that match the filters above (');
    expect(component.find('.review_filters_section_rating_group').text()).toEqual('Very Positive');
    expect(component.find('.closing_review_stat_bracket').text()).toEqual(')');
  });
});
