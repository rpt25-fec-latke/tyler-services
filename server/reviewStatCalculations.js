const calculateRatingGroup = (percentPositive) => {
  const ratingGroupInfo = {};

  if (percentPositive > 0.9 && percentPositive <= 1) {
    ratingGroupInfo.ratingGroup = 'Overwhelmingly Positive';
    ratingGroupInfo.type = 'positive';
  } else if (percentPositive > 0.8 && percentPositive <= 0.9) {
    ratingGroupInfo.ratingGroup = 'Very Positive';
    ratingGroupInfo.type = 'positive';
  } else if (percentPositive > 0.6 && percentPositive <= 0.8) {
    ratingGroupInfo.ratingGroup = 'Mostly Positive';
    ratingGroupInfo.type = 'positive';
  } else if (percentPositive > 0.4 && percentPositive <= 0.6) {
    ratingGroupInfo.ratingGroup = 'Mixed';
    ratingGroupInfo.type = 'mixed';
  } else if (percentPositive > 0.2 && percentPositive <= 0.4) {
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

const createChartData = (reviews) => {
  const chartData = {};

  const currentDate = new Date();
  const timeZoneOffset = currentDate.getTimezoneOffset();
  currentDate.setMinutes(currentDate.getMinutes() - timeZoneOffset);

  const twentyWeeksAgo = new Date();
  twentyWeeksAgo.setDate(currentDate.getDate() - 140);
  twentyWeeksAgo.setMinutes(twentyWeeksAgo.getMinutes() - timeZoneOffset);

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(currentDate.getDate() - 30);
  thirtyDaysAgo.setMinutes(thirtyDaysAgo.getMinutes() - timeZoneOffset);

  const positiveReviewCountsLastTwentyWeeks = {};
  const negativeReviewCountsLastTwentyWeeks = {};
  const positiveReviewCountsLastThirtyDays = {};
  const negativeReviewCountsLastThirtyDays = {};

  let startingTwentyWeeksAgo = new Date();
  startingTwentyWeeksAgo.setDate(currentDate.getDate() - 140);
  startingTwentyWeeksAgo.setMinutes(startingTwentyWeeksAgo.getMinutes() - timeZoneOffset);
  startingTwentyWeeksAgo = new Date(startingTwentyWeeksAgo.getFullYear(), startingTwentyWeeksAgo.getMonth(), startingTwentyWeeksAgo.getDate());

  while (startingTwentyWeeksAgo <= currentDate) {
    positiveReviewCountsLastTwentyWeeks[startingTwentyWeeksAgo] = 0;
    negativeReviewCountsLastTwentyWeeks[startingTwentyWeeksAgo] = 0;
    startingTwentyWeeksAgo.setDate(startingTwentyWeeksAgo.getDate() + 7);
  }

  let startingThirtyDaysAgo = new Date();
  startingThirtyDaysAgo.setDate(currentDate.getDate() - 30);
  startingThirtyDaysAgo.setMinutes(startingThirtyDaysAgo.getMinutes() - timeZoneOffset);
  startingThirtyDaysAgo = new Date(startingThirtyDaysAgo.getFullYear(), startingThirtyDaysAgo.getMonth(), startingThirtyDaysAgo.getDate());

  while (startingThirtyDaysAgo <= currentDate) {
    positiveReviewCountsLastThirtyDays[startingThirtyDaysAgo] = 0;
    negativeReviewCountsLastThirtyDays[startingThirtyDaysAgo] = 0;
    startingThirtyDaysAgo.setDate(startingThirtyDaysAgo.getDate() + 1);
  }

  reviews.map((review) => {
    const { reviewDate, isRecommended } = review;

    if (reviewDate > twentyWeeksAgo) {
      const reviewCountsLastTwentyKeys = Object.keys(positiveReviewCountsLastTwentyWeeks);
      reviewCountsLastTwentyKeys.map((key, i) => {
        const keyDate = new Date(key);
        if (reviewDate > keyDate && reviewDate <= new Date(reviewCountsLastTwentyKeys[i + 1]) && isRecommended) {
          positiveReviewCountsLastTwentyWeeks[key]++;
        } else if (reviewDate > keyDate && reviewDate <= new Date(reviewCountsLastTwentyKeys[i + 1]) && !isRecommended) {
          negativeReviewCountsLastTwentyWeeks[key]--;
        }
      });
    }

    if (reviewDate > thirtyDaysAgo) {
      const reviewCountsLastThirtyKeys = Object.keys(positiveReviewCountsLastThirtyDays);
      reviewCountsLastThirtyKeys.map((key) => {
        const keyDate = new Date(key);
        if (keyDate.getMonth() === reviewDate.getMonth() && keyDate.getDate() === reviewDate.getDate() && isRecommended) {
          positiveReviewCountsLastThirtyDays[key]++;
        } else if (keyDate.getMonth() === reviewDate.getMonth() && keyDate.getDate() === reviewDate.getDate() && !isRecommended) {
          negativeReviewCountsLastThirtyDays[key]--;
        }
      });
    }
  });

  chartData.reviewCountsLastTwentyWeeks = {
    positive: positiveReviewCountsLastTwentyWeeks,
    negative: negativeReviewCountsLastTwentyWeeks,
  };
  chartData.reviewCountsLastThirtyDays = {
    positive: positiveReviewCountsLastThirtyDays,
    negative: negativeReviewCountsLastThirtyDays,
  };

  return chartData;
};

const calculateReviewStats = (initialReviewStats) => {
  const reviewStats = {};

  const total = initialReviewStats.totalReviewCount;
  const totalPositive = initialReviewStats.totalPositiveReviewCount;
  const totalRecent = initialReviewStats.totalRecentReviewCount;
  const totalPositiveRecent = initialReviewStats.totalPositiveRecentReviewCount;
  const purchaseViaSteamCount = initialReviewStats.isPurchasedViaSteamCount;
  const englishLanguageReviewCount = initialReviewStats.englishLanguageReviewCount;

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
  reviewStats.purchaseViaSteamCount = purchaseViaSteamCount;
  reviewStats.englishLanguageReviewCount = englishLanguageReviewCount;
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
module.exports.createChartData = createChartData;
