const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'review_data',
});

const getAllReviewsForGame = (gameId, cb) => {
  connection.query(`SELECT * FROM reviews INNER JOIN users ON reviews.userId = users.userId WHERE reviews.gameId = ${gameId};`, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

const getTopTenMostHelpfulLastThirtyDays = (gameId, cb) => {
  connection.query(`SELECT * FROM reviews INNER JOIN users ON reviews.userId = users.userId WHERE reviews.gameId = ${gameId} AND reviews.reviewDate >= (CURRENT_DATE - INTERVAL 30 DAY) ORDER BY reviews.isHelpfulCount DESC LIMIT 10;`, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

const getTenMostRecentLastThirtyDays = (gameId, cb) => {
  connection.query(`SELECT * FROM reviews INNER JOIN users ON reviews.userId = users.userId WHERE reviews.gameId = ${gameId} AND reviews.reviewDate >= (CURRENT_DATE - INTERVAL 30 DAY) ORDER BY reviews.reviewDate DESC LIMIT 10;`, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

const getReviewStatsForGame = (gameId, cb) => {
  connection.query(`SELECT COUNT(reviewId) AS 'totalReviewCount', COUNT(CASE WHEN isRecommended = 1 THEN reviewId END) AS 'totalPositiveReviewCount', COUNT(CASE WHEN reviewDate >= (CURRENT_DATE - INTERVAL 30 DAY) THEN reviewId END) AS 'totalRecentReviewCount', COUNT(CASE WHEN reviewDate >= (CURRENT_DATE - INTERVAL 30 DAY) AND isRecommended = 1 THEN reviewId END) AS 'totalPositiveRecentReviewCount' FROM reviews WHERE gameId = ${gameId};`, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports.getAllReviewsForGame = getAllReviewsForGame;
module.exports.getTopTenMostHelpfulLastThirtyDays = getTopTenMostHelpfulLastThirtyDays;
module.exports.getTenMostRecentLastThirtyDays = getTenMostRecentLastThirtyDays;
module.exports.getReviewStatsForGame = getReviewStatsForGame;
