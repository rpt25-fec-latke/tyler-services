DROP DATABASE IF EXISTS review_data;

CREATE DATABASE review_data;

USE review_data;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  userId int NOT NULL AUTO_INCREMENT,
  userName varchar(100) NOT NULL,
  productsCount int NOT NULL,
  reviewCount int NOT NULL,
  profilePictureUrl varchar(255) NOT NULL,
  hoursOnRecord float(10, 1) NOT NULL,
  steamLevel int NOT NULL,
  isOnline boolean NOT NULL,
  PRIMARY KEY (userId)
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  reviewId int NOT NULL AUTO_INCREMENT,
  userId int NOT NULL,
  gameId int NOT NULL,
  reviewText varchar(1000) NOT NULL,
  isRecommended boolean NOT NULL,
  commentCount int NOT NULL,
  isHelpfulCount int NOT NULL,
  isFunnyCount int NOT NULL,
  isCleverAwardCount int NOT NULL,
  warmBlanketAwardCount int NOT NULL,
  saucyAwardCount int NOT NULL,
  slowClapAwardCount int NOT NULL,
  takeMyPointsAwardCount int NOT NULL,
  wholesomeAwardCount int NOT NULL,
  jesterAwardCount int NOT NULL,
  fancyPantsAwardCount int NOT NULL,
  whoaAwardCount int NOT NULL,
  superStarAwardCount int NOT NULL,
  wildAwardCount int NOT NULL,
  treasureAwardCount int NOT NULL,
  mindBlownAwardCount int NOT NULL,
  goldenUnicornAwardCount int NOT NULL,
  deepThoughtsAwardCount int NOT NULL,
  heartWarmingAwardCount int NOT NULL,
  hilariousAwardCount int NOT NULL,
  hotTakeAwardCount int NOT NULL,
  poetryAwardCount int NOT NULL,
  extraHelpfulAwardCount int NOT NULL,
  gottaHaveItAwardCount int NOT NULL,
  michelangeloAwardCount int NOT NULL,
  madScinetistAwardCount int NOT NULL,
  isEarlyAccessReview boolean NOT NULL,
  isPurchasedOrActivatedViaSteamFlags varchar(255) NOT NULL,
  userHoursOnRecordAtTimeOfReview float(10, 1) NOT NULL,
  reviewLanguage varchar (25) NOT NULL,
  reviewDate datetime NOT NULL,
  PRIMARY KEY (reviewId),
  FOREIGN KEY (userId) REFERENCES users (userId)
);