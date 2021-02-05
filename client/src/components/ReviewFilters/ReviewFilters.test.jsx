import React from 'react';
import { shallow } from 'enzyme';

import ReviewFilters from './ReviewFilters.jsx';
import ReviewTypeFilter from './ReviewTypeFilter.jsx';
import PurchaseTypeFilter from './PurchaseTypeFilter.jsx';
import LanguageTypeFilter from './LanguageTypeFilter.jsx';
import DateRangeFilter from './DateRangeFilter.jsx';
import PlaytimeFilter from './PlaytimeFilter.jsx';

describe('Display as filter component', () => {
  it('Should properly call the "updateReviewFilters" function upon a change event occurring on the display as select element', () => {
    const testFunc = jest.fn();
    const fakeEvent = { target: { value: 'mostHelpful' } };
    const component = shallow(<ReviewFilters updateReviewFilters={testFunc} />);

    component
      .find('.display_as')
      .simulate('change', fakeEvent);

    expect(testFunc).toHaveBeenCalled();
  });
});

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
