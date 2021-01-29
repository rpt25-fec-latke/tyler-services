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
  const gameId = req.query.id;

  if (gameId < 1 || gameId > 100) {
    res.status(500);
  }

  const responseData = {};

  db.getAllReviewsForGame(gameId, (err, data) => {
    if (err) {
      console.log(err);
      res.send(`Error getting all reviews for game ${gameId}`, err);
    } else {
      responseData.allReviews = data;
      db.getTopTenMostHelpfulLastThirtyDays(gameId, (err2, data2) => {
        if (err2) {
          console.log(err2);
          res.send(`Error getting top 10 most help last 30 days for game ${gameId}`);
        } else {
          responseData.mostHelpfulLastThirty = data2;
          db.getTenMostRecentLastThirtyDays(gameId, (err3, data3) => {
            if (err3) {
              console.log(err3);
              res.send(`Error getting top 10 most recent last 30 days for game ${gameId}`);
            } else {
              responseData.mostRecentLastThirty = data3;
              db.getReviewStatsForGame(gameId, (err4, data4) => {
                if (err4) {
                  res.send(`Error getting review stats for game ${gameId}`);
                  console.log(err);
                } else {
                  const reviewStats = stats.calculateReviewStats(data4[0]);
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
