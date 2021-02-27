import React from 'react';

import MainReviewListEntry from './MainReviewListEntry.jsx';

import { MainReviewListContainer, MainReviewsSectionTitle } from '../../styled';

const MainReviewList = ({ mainReviewsList, displayAs, thumbsUpLogo, thumbsDownLogo, purchasedViaSteamImage, activatedViaSteamImage, awardImages }) => (
  <MainReviewListContainer>
    <MainReviewsSectionTitle>
      {displayAs === 'summary' ? 'Most Helpful Reviews' : null}
    </MainReviewsSectionTitle>
    {mainReviewsList.map((review, i) => (i < 10 ? <MainReviewListEntry key={i} review={review} thumbsUpLogo={thumbsUpLogo} thumbsDownLogo={thumbsDownLogo} purchasedViaSteamImage={purchasedViaSteamImage} activatedViaSteamImage={activatedViaSteamImage} awardImages={awardImages} /> : null))}
  </MainReviewListContainer>
);

export default MainReviewList;
