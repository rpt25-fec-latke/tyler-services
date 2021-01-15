const mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true });

(() => {

  let releaseDates = {};

  let startingId = 1;
  while (startingId <= 100) {
    releaseDates[startingId] = 'someDate';
  }

  let reviewSchema = mongoose.Schema({
    //code
  });

  let Review = mongoose.model('Review', reviewSchema);

  let userSchema = mongoose.Schema({
    //code
  });

  let User = mongoose.model('User', userSchema);

  let numGames = 100;
  while (numGames > 0) {
    let randNumOfReviews = Math.floor(Math.random() * 16);
    while (numOfReviews > 0) {
      //insert reviews into DB
    }
  }
});