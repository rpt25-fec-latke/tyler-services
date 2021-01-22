const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({ extended: true }));

app.get('/reviews', (req, res) => {

  let gameId = req.query.id;

  if (gameId < 1 || gameId > 100) {
    res.status(500);
  }

  let responseData = {};

  db.getAllReviewsForGame(gameId, (err, data) => {
    if (err) {
      console.log(err);
      res.send(`Error getting all reviews for game ${gameId}`, err);
    } else {
      responseData.allReviews = data;
      db.getTopTenMostHelpfulLastThirtyDays(gameId, (err, data) => {
        if (err) {
          console.log(err);
          res.send(`Error getting top 10 most help last 30 days for game ${gameId}`);
        } else {
          responseData.mostHelpfulLastThirty = data;
          db.getTenMostRecentLastThirtyDays(gameId, (err, data) => {
            if (err) {
              console.log(err);
              res.send(`Error getting top 10 most recent last 30 days for game ${gameId}`);
            } else {
              responseData.mostRecentLastThirty = data;
              res.send(responseData);
            }
          });
        }
      });
    }
  });

});

app.get('/review_counts', (req, res) => {

  let gameId = req.query.id;

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
