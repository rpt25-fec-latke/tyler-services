import React from 'react';

import MainReviewListEntry from './MainReviewListEntry.jsx';

import { MainReviewListContainer } from '../../styled';

const MainReviewList = ({ mainReviewsList }) => (
  <MainReviewListContainer>
    {mainReviewsList.map((review, i) => (i < 10 ? <MainReviewListEntry key={i} review={review} /> : null))}
  </MainReviewListContainer>
);

export default MainReviewList;
