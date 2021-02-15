import React from 'react';

import RecentReviewListEntry from './RecentReviewListEntry.jsx';

import { RecentReviewListContainer } from '../../styled';

const RecentReviewList = ({ recentReviewsList }) => (
  <RecentReviewListContainer>
    {recentReviewsList.map((review, i) => (i < 10 ? <RecentReviewListEntry key={i} review={review} /> : null))}
  </RecentReviewListContainer>
);

export default RecentReviewList;
