import React from 'react';

import RecentReviewListEntry from './RecentReviewListEntry.jsx';

import { RecentReviewListContainer, RecentReviewsSectionTitle } from '../../styled';

const RecentReviewList = ({ recentReviewsList, displayAs, thumbsUpLogo, thumbsDownLogo, purchasedViaSteamImage, activatedViaSteamImage }) => (
  <RecentReviewListContainer>
    <RecentReviewsSectionTitle>
      {displayAs === 'summary' ? 'Recently Posted' : null}
    </RecentReviewsSectionTitle>
    {displayAs === 'summary' ? recentReviewsList.map((review, i) => (i < 10 ? <RecentReviewListEntry key={i} review={review} thumbsUpLogo={thumbsUpLogo} thumbsDownLogo={thumbsDownLogo} purchasedViaSteamImage={purchasedViaSteamImage} activatedViaSteamImage={activatedViaSteamImage} /> : null)) : null}
  </RecentReviewListContainer>
);

export default RecentReviewList;
