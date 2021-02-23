const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../database');
const stats = require('./reviewStatCalculations');

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/reviews', (req, res) => {
  const gameId = req.query ? req.query.id : 1;

  if (gameId < 1 || gameId > 100) {
    res.status(500);
  }

  const responseData = {};

  db.getAllReviewsForGame(gameId, (err, data) => {
    if (err) {
      res.status(500).send(`Error getting all reviews for game ${gameId}`, err);
    } else {
      responseData.allReviews = data;
      const chartData = stats.createChartData(data);
      responseData.chartData = chartData;
      db.getAllReviewsOrderedByRecent(gameId, (err2, data2) => {
        if (err2) {
          res.status(500).send(`Error getting all reviews ordered by recent for game ${gameId}`, err2);
        } else {
          responseData.allReviewsOrderedRecent = data2;
          db.getAllReviewsOrderedByHelpful(gameId, (err3, data3) => {
            if (err3) {
              res.status(500).send(`Error getting all reviews ordered by helpful for game ${gameId}`, err3);
            } else {
              responseData.allReviewsOrderedHelpful = data3;
              db.getAllReviewsOrderedByFunny(gameId, (err4, data4) => {
                if (err4) {
                  res.status(500).send(`Error getting all reviews ordered by funny for game ${gameId}`, err4);
                } else {
                  responseData.allReviewsOrderedFunny = data4;
                  db.getAllReviewsRecentLastThirty(gameId, (err5, data5) => {
                    if (err5) {
                      res.status(500).send(`Error getting all reviews recent last thirty for game ${gameId}`, err5);
                    } else {
                      responseData.allReviewsRecentLastThirty = data5;
                      db.getReviewStatsForGame(gameId, (err6, data6) => {
                        if (err6) {
                          res.status(500).send(`Error getting review stats for game ${gameId}`, err6);
                        } else {
                          const reviewStats = stats.calculateReviewStats(data6[0]);
                          responseData.reviewStats = reviewStats;
                          res.send(responseData);
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
});

app.get('/review_counts', (req, res) => {
  const gameId = req.query.id;

  if (gameId < 1 || gameId > 100) {
    res.status(500);
  }

  db.getReviewStatsForGame(gameId, (err, data) => {
    if (err) {
      res.send(`Error getting review stats for game ${gameId}`, err);
    } else {
      res.send(data);
    }
  });
});

module.exports = app;
