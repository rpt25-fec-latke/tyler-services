const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'review_data'
});

let getAllReviewsForAGame = (gameId, cb) => {
  connection.query(`SELECT * FROM reviews INNER JOIN users ON reviews.userId = users.id WHERE reviews.gameId = ${gameId};`, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
}

module.exports.getAllReviewsForAGame = getAllReviewsForAGame;
