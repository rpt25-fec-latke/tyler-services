const calculateRatingGroup = (percentPositive) => {
  let ratingGroup;

  if (percentPositive > 0.9 && percentPositive <= 1) {
    ratingGroup = 'Overwhelmingly Positive';
  } else if (percentPositive > 0.8 && percentPositive < 0.9) {
    ratingGroup = 'Very Positive';
  } else if (percentPositive > 0.65 && percentPositive < 0.8) {
    ratingGroup = 'Mostly Positive';
  } else if (percentPositive > 0.35 && percentPositive < 0.65) {
    ratingGroup = 'Mixed';
  } else if (percentPositive > 0.2 && percentPositive < 0.35) {
    ratingGroup = 'Mostly Negative';
  } else if (percentPositive > 0.1 && percentPositive < 0.2) {
    ratingGroup = 'Very Negative';
  } else if (percentPositive >= 0 && percentPositive < 0.1) {
    ratingGroup = 'Overwhelmingly Negative';
  }

  return ratingGroup;
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

  hasOverallReviews ? overallRatingGroup = calculateRatingGroup(percentPositiveOverall) : overallRatingGroup = null;
  hasRecentReviews ? recentRatingGroup = calculateRatingGroup(percentPositiveRecent) : recentRatingGroup = null;

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
    reviewStats.overallReviewsRatingGroupHoverMessage = `${reviewStats.percentPositiveOverall * 100}% of the ${reviewStats.totalReviewCount.toLocaleString()} user reviews for this game are positive.`;
  } else {
    reviewStats.overallReviewsRatingGroupHoverMessage = notEnoughReviewsMessage;
  }

  if (reviewStats.enoughRecentReviews) {
    reviewStats.recentReviewsRatingGroupHoverMessage = `${reviewStats.percentPositiveRecent * 100}% of the ${reviewStats.totalRecentReviewCount.toLocaleString()} user reviews for this game are positive.`;
  } else {
    reviewStats.recentReviewsRatingGroupHoverMessage = notEnoughReviewsMessage;
  }

  return reviewStats;
};

module.exports.calculateReviewStats = calculateReviewStats;
