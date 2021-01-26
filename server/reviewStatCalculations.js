const calculateRatingGroup = (percentPositive) => {
  let ratingGroup = '';

  if (percentPositive > 0.8 && percentPositive <= 1) {
    ratingGroup = 'Very Positive';
  } else if (percentPositive > 0.6 && percentPositive < 0.8) {
    ratingGroup = 'Mostly Positive';
  } else if (percentPositive > 0.4 && percentPositive < 0.6) {
    ratingGroup = 'Mixed';
  } else if (percentPositive > 0.2 && percentPositive < 0.4) {
    ratingGroup = 'Mostly Negative';
  } else if (percentPositive >= 0 && percentPositive < 0.2) {
    ratingGroup = 'Very Negative';
  }

  return ratingGroup;
};

const calculateReviewStats = (initialReviewStats) => {
  const reviewStats = {};

  const hasOverallReviews = initialReviewStats.totalReviewCount > 0;
  const hasRecentReviews = initialReviewStats.totalRecentReviewCount > 0;

  let percentPositiveOverall;
  let percentPositiveRecent;

  hasOverallReviews ? percentPositiveOverall = (initialReviewStats.totalPositiveReviewCount / initialReviewStats.totalReviewCount).toFixed(2) : percentPositiveOverall = null;
  hasRecentReviews ? percentPositiveRecent = (initialReviewStats.totalPositiveRecentReviewCount / initialReviewStats.totalRecentReviewCount).toFixed(2) : percentPositiveRecent = null;

  let overallRatingGroup;
  let recentRatingGroup;

  hasOverallReviews ? overallRatingGroup = calculateRatingGroup(percentPositiveOverall) : overallRatingGroup = null;
  hasRecentReviews ? recentRatingGroup = calculateRatingGroup(percentPositiveRecent) : recentRatingGroup = null;

  reviewStats.totalReviewCount = initialReviewStats.totalReviewCount;
  reviewStats.totalPositiveReviewCount = initialReviewStats.totalPositiveReviewCount;
  reviewStats.totalRecentReviewCount = initialReviewStats.totalRecentReviewCount;
  reviewStats.totalPositiveRecentReviewCount = initialReviewStats.totalPositiveRecentReviewCount;
  reviewStats.percentPositiveOverall = percentPositiveOverall;
  reviewStats.overallRatingGroup = overallRatingGroup;
  reviewStats.percentPositiveRecent = percentPositiveRecent;
  reviewStats.recentRatingGroup = recentRatingGroup;

  return reviewStats;
};

module.exports.calculateReviewStats = calculateReviewStats;
