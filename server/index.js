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

  db.getAllReviewsForGame(gameId, (err, data) => {
    if (err) {
      res.send(`Error getting reviews for game ${gameId}`, err);
    } else {
      res.send(data);
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
