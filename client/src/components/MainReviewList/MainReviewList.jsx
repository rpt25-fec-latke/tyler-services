import React from 'react';

import MainReviewListEntry from './MainReviewListEntry.jsx';

import { MainReviewListContainer, MainReviewsSectionTitle } from '../../styled';

const MainReviewList = ({ mainReviewsList, displayAs }) => (
  <MainReviewListContainer>
    <MainReviewsSectionTitle>
      {displayAs === 'summary' ? 'Most Helpful Reviews' : null}
    </MainReviewsSectionTitle>
    {mainReviewsList.map((review, i) => (i < 10 ? <MainReviewListEntry key={i} review={review} /> : null))}
  </MainReviewListContainer>
);

export default MainReviewList;
