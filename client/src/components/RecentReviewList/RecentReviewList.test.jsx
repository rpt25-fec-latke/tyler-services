import React from 'react';
import { shallow } from 'enzyme';

import RecentReviewListEntry from './RecentReviewListEntry.jsx';

describe('RecentReviewListEntry', () => {
  it('Should correctly render user information about the review', () => {
    const fakeProps = {
      userName: 'DonaldDuck44',
      hoursOnRecord: 122,
    };

    const component = shallow(<RecentReviewListEntry review={fakeProps} />);

    expect(component.find('.username_recent').text()).toEqual('DonaldDuck44');
    expect(component.find('.hours_on_record_recent').text()).toEqual('122 hrs');
  });

  it('Should correctly render review information about the review', () => {
    const fakeProps = {
      reviewText: 'Love this game. Can\'t stop playing, I\'m addicted!!!',
      isHelpfulCount: 8,
    };

    const component = shallow(<RecentReviewListEntry review={fakeProps} />);

    expect(component.find('.review_text_recent').text()).toEqual('Love this game. Can\'t stop playing, I\'m addicted!!!');
    expect(component.find('.is_helpful_count_recent').text()).toEqual('8 people found this review helpful');
  });
});
