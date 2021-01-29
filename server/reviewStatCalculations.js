const calculateRatingGroup = (percentPositive) => {
  const ratingGroupInfo = {};

  if (percentPositive > 0.9 && percentPositive <= 1) {
    ratingGroupInfo.ratingGroup = 'Overwhelmingly Positive';
    ratingGroupInfo.type = 'positive';
  } else if (percentPositive > 0.8 && percentPositive <= 0.9) {
    ratingGroupInfo.ratingGroup = 'Very Positive';
    ratingGroupInfo.type = 'positive';
  } else if (percentPositive > 0.65 && percentPositive <= 0.8) {
    ratingGroupInfo.ratingGroup = 'Mostly Positive';
    ratingGroupInfo.type = 'positive';
  } else if (percentPositive > 0.35 && percentPositive <= 0.65) {
    ratingGroupInfo.ratingGroup = 'Mixed';
    ratingGroupInfo.type = 'mixed';
  } else if (percentPositive > 0.2 && percentPositive <= 0.35) {
    ratingGroupInfo.ratingGroup = 'Mostly Negative';
    ratingGroupInfo.type = 'negative';
  } else if (percentPositive > 0.1 && percentPositive <= 0.2) {
    ratingGroupInfo.ratingGroup = 'Very Negative';
    ratingGroupInfo.type = 'negative';
  } else if (percentPositive >= 0 && percentPositive <= 0.1) {
    ratingGroupInfo.ratingGroup = 'Overwhelmingly Negative';
    ratingGroupInfo.type = 'negative';
  }

  return ratingGroupInfo;
};

const calculateReviewStats = (initialReviewStats) => {
  const reviewStats = {};

  const total = initialReviewStats.totalReviewCount;
  const totalPositive = initialReviewStats.totalPositiveReviewCount;
  const totalRecent = initialReviewStats.totalRecentReviewCount;
  const totalPositiveRecent = initialReviewStats.totalPositiveRecentReviewCount;

  const hasOverallReviews = initialReviewStats.totalReviewCount > 0;
  const hasRecentReviews = initialReviewStats.totalRecentReviewCount > 0;

  let percentPositiveOverall;
  let percentPositiveRecent;

  hasOverallReviews ? percentPositiveOverall = (totalPositive / total).toFixed(2) : percentPositiveOverall = null;
  hasRecentReviews ? percentPositiveRecent = (totalPositiveRecent / totalRecent).toFixed(2) : percentPositiveRecent = null;

  let overallRatingGroup;
  let recentRatingGroup;

  hasOverallReviews ? overallRatingGroup = calculateRatingGroup(percentPositiveOverall) : overallRatingGroup = { ratingGroup: null, type: null };
  hasRecentReviews ? recentRatingGroup = calculateRatingGroup(percentPositiveRecent) : recentRatingGroup = { ratingGroup: null, type: null };

  reviewStats.totalReviewCount = total;
  reviewStats.totalPositiveReviewCount = totalPositive;
  reviewStats.totalRecentReviewCount = totalRecent;
  reviewStats.totalPositiveRecentReviewCount = totalPositiveRecent;
  reviewStats.percentPositiveOverall = percentPositiveOverall;
  reviewStats.overallRatingGroup = overallRatingGroup;
  reviewStats.percentPositiveRecent = percentPositiveRecent;
  reviewStats.recentRatingGroup = recentRatingGroup;

  reviewStats.enoughTotalReviews = total >= 1;
  reviewStats.enoughRecentReviews = totalRecent >= 1;

  const notEnoughReviewsMessage = 'Need more user reviews to generate a score';

  if (reviewStats.enoughTotalReviews) {
    reviewStats.overallReviewsRatingGroupHoverMessage = `${Math.round(reviewStats.percentPositiveOverall * 100)}% of the ${reviewStats.totalReviewCount.toLocaleString()} user reviews for this game are positive.`;
  } else {
    reviewStats.overallReviewsRatingGroupHoverMessage = notEnoughReviewsMessage;
  }

  if (reviewStats.enoughRecentReviews) {
    reviewStats.recentReviewsRatingGroupHoverMessage = `${Math.round(reviewStats.percentPositiveRecent * 100)}% of the ${reviewStats.totalRecentReviewCount.toLocaleString()} user reviews for this game are positive.`;
  } else {
    reviewStats.recentReviewsRatingGroupHoverMessage = notEnoughReviewsMessage;
  }

  return reviewStats;
};

module.exports.calculateReviewStats = calculateReviewStats;
