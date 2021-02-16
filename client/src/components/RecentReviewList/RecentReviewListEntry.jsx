import React from 'react';

const RecentReviewListEntry = ({ review }) => (
  <div>
    {JSON.stringify(review.userName)}
  </div>
);

export default RecentReviewListEntry;
