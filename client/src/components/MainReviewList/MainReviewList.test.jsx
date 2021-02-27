import React from 'react';
import { shallow } from 'enzyme';

import MainReviewListEntry from './MainReviewListEntry.jsx';

describe('MainReviewListEntry', () => {
  it('Should correctly render user information about the review', () => {
    const fakeProps = {
      userName: 'MickeyMouse22',
      reviewCount: 53,
      productsCount: 12,
      profilePictureUrl: null,
    };

    const component = shallow(<MainReviewListEntry review={fakeProps} />);

    expect(component.find('.username').text().slice(0, fakeProps.userName.length)).toEqual('MickeyMouse22');
    expect(component.find('.product_count').text()).toEqual('12 products in account');
    expect(component.find('.review_count').text()).toEqual('53 reviews');
  });

  it('Should correctly render review information about the review', () => {
    const fakeProps = {
      isRecommended: false,
      reviewText: 'This game sucks. Waste of money.',
      isHelpfulCount: 8,
      commentCount: 14,
    };

    const component = shallow(<MainReviewListEntry review={fakeProps} />);

    expect(component.find('.is_recommended_text').text()).toEqual('Not Recommended');
    expect(component.find('.review_text').text()).toEqual('This game sucks. Waste of money.');
    expect(component.find('.is_helpful_count').text()).toEqual('8 people found this review helpful');
    expect(component.find('.comment_count').text()).toEqual('14');
  });
});
