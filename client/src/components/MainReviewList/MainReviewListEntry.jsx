import React from 'react';

const MainReviewListEntry = ({ review }) => (
  <div>
    {JSON.stringify(review.userName)}
  </div>
);

export default MainReviewListEntry;
