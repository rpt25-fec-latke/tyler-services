import React from 'react';
import { shallow } from 'enzyme';

import ReviewsBreakdown from './ReviewsBreakdown.jsx';

describe('ReviewsBreakdown component', () => {
  it('Should correctly render review stat info that is passed down to it', () => {
    const fakeProps = {
      overallRatingGroup: 'Very Positive',
      percentPositiveOverall: 0.82,
      percentPositiveRecent: null,
      recentRatingGroup: 'Mostly Positive',
      totalPositiveRecentReviewCount: 0,
      totalPositiveReviewCount: 122,
      totalRecentReviewCount: 0,
      totalReviewCount: 149,
      enoughRecentReviews: false,
      enoughTotalReviews: true,
      overallReviewsRatingGroupHoverMessage: '82% of the 149 user reviews for this game are positive.',
      recentReviewsRatingGroupHoverMessage: '"Need more user reviews to generate a score"',
    };
    const component = shallow(<ReviewsBreakdown reviewStats={fakeProps} />);

    expect(component.find('.total_rating_group').text()).toEqual('Very Positive82% of the 149 user reviews for this game are positive.');
    expect(component.find('.recent_rating_group').text()).toEqual('0 user reviews"Need more user reviews to generate a score"');
    expect(component.find('.review_count#total').text()).toEqual(' (149 reviews) ');
    expect(component.find('.review_count#recent').text()).toEqual(' (0 reviews) ');

    component.find('.total_rating_group').simulate('mouseover');
    expect(component.find('.total_rating_group').prop('style')).toHaveProperty('opacity', '1');
  });
});

// https://stackoverflow.com/questions/40795850/how-to-test-style-for-a-react-component-attribute-with-enzyme
// https://medium.com/@NbilzDy/adding-unit-test-to-your-react-application-jest-enzyme-fc2152d979e1
