const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;
const db = require('../database');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({ extended: true }));

app.get('/reviews', (req, res) => {

  let gameId = req.query.gameId;

  db.getAllReviewsForAGame(gameId, (err, data) => {
    if (err) {
      res.send(`Error getting reviews for game ${gameId}`, err);
    } else {
      res.send(data);
    }
  });

});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});