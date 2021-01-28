import React from 'react';
import { shallow } from 'enzyme';

import ReviewsBreakdown from './ReviewsBreakdown.jsx';

describe('ReviewsBreakdown component', () => {
  it('Should correctly render review breakdown when the recent review count is 0', () => {
    const fakeProps = {
      overallRatingGroup: {
        ratingGroup: 'Very Positive',
        type: 'positive',
      },
      recentRatingGroup: {
        ratingGroup: null,
        type: null,
      },
      totalRecentReviewCount: 0,
      totalReviewCount: 149,
      enoughRecentReviews: false,
      enoughTotalReviews: true,
    };

    const component = shallow(<ReviewsBreakdown reviewStats={fakeProps} />);

    expect(component.find('.total_rating_group').text()).toEqual('Very Positive');
    expect(component.find('.recent_rating_group').text()).toEqual('0 user reviews');
    expect(component.find('.total_review_count').text()).toEqual(' (149 reviews) ');
    expect(component.find('.recent_review_count').text()).toEqual(' (0 reviews) ');
  });

  it('Should correctly render review breakdown when the recent review count is greater than 0', () => {
    const fakeProps = {
      overallRatingGroup: {
        ratingGroup: 'Very Positive',
        type: 'positive',
      },
      recentRatingGroup: {
        ratingGroup: 'Mostly Positive',
        type: 'positive',
      },
      totalRecentReviewCount: 12,
      totalReviewCount: 149,
      enoughRecentReviews: true,
      enoughTotalReviews: true,
    };

    const component = shallow(<ReviewsBreakdown reviewStats={fakeProps} />);

    expect(component.find('.total_rating_group').text()).toEqual('Very Positive');
    expect(component.find('.recent_rating_group').text()).toEqual('Mostly Positive');
    expect(component.find('.total_review_count').text()).toEqual(' (149 reviews) ');
    expect(component.find('.recent_review_count').text()).toEqual(' (12 reviews) ');
  });
});
