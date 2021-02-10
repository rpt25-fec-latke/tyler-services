import React from 'react';

import { ReviewFilterPillContainer, ReviewFilterPillText, ReviewFilterPillImage } from '../../styled';

const ReviewFilterPill = ({ index, pill, removeReviewFilterPill }) => (
  <ReviewFilterPillContainer className={index} onClick={(e) => { removeReviewFilterPill(e.target); }}>
    <ReviewFilterPillText>{pill}</ReviewFilterPillText>
    <ReviewFilterPillImage src="https://store.cloudflare.steamstatic.com/public/images/v6/deleteSearchTerm.png"></ReviewFilterPillImage>
  </ReviewFilterPillContainer>
);

export default ReviewFilterPill;
