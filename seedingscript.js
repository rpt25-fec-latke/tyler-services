const mysql = require('mysql');
const faker = require('faker');

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'review_data'
});

let userHoursOnRecord = {};


//----------------------------------------
//Helper functions
//----------------------------------------


let generateReleaseDates = (numGames) => {
  let releaseDates = {};
  let startingGameId = 1;

  while (startingGameId <= numGames) {
    releaseDates[startingGameId] = faker.date.between('2012-01-01', '2021-01-18');
    startingGameId++;
  }

  return releaseDates;
}

let generateArrayOfUserIds = (numUsers) => {
  let arrayOfUserIds = [];

  while (numUsers > 0) {
    arrayOfUserIds.unshift(numUsers);
    numUsers--;
  }

  return arrayOfUserIds;
}

let deleteAllFromTable = (tableName) => {

  db.query(`DELETE FROM ${tableName};`, (err) => {
    if (err) {
      console.log(`Error deleting all from table '${tableName}': `, err);
      return;
    }
  });
  console.log(`All rows from table ${tableName} successfully deleted`);

}


//----------------------------------------
//Seeding functions
//----------------------------------------


let seedUsers = (numUsers) => {

  if (numUsers === 0) {
    console.log('No users to seed');
    return;
  }

  deleteAllFromTable('users');

  let startingUserId = 1;

  while (startingUserId <= numUsers) {

    let data = {
      userName: `'${faker.internet.userName()}'`,
      productsCount: Math.floor(Math.random() * 251),
      reviewCount: Math.floor(Math.random() * 71),
      profilePictureUrl: `'https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/user-profile-pictures/images+(${startingUserId}).jpeg'`,
      hoursOnRecord: ((Math.random() * 100) + 5).toFixed(1),
      steamLevel: Math.ceil(Math.random() * 1050),
      isOnline: Math.floor(Math.random() * 11) > 5 ? true : false
    }

    userHoursOnRecord[startingUserId] = data.hoursOnRecord;

    db.query(`INSERT INTO users (${Object.keys(data).join(', ')}) VALUES (${Object.values(data).join(', ')});`, (err) => {
      if (err) {
        console.log(`Error seeding user number ${startingUserId} into table 'users': `, err);
        return;
      }
    });
    startingUserId++;
  }

  console.log(`All ${numUsers} users seeded successfully into 'users' table`);
}

let seedReviews = (numGames, numUsers) => {

  if (numGames === 0) {
    console.log('No games to seed for');
    return;
  }

  deleteAllFromTable('reviews');

  //have to generate release dates since don't have access to that data yet. When assemble to proxy, can query for it so that review dates don't precede release date of game
  let releaseDates = generateReleaseDates(numGames);
  let otherLanguages = ["'ZH'", "'ES'", "'AR'", "'HI'", "'BN'", "'PT'", "'RU'", "'JA'"];
  let startingGameId = 1;

  while (startingGameId <= numGames) {

    let numReviews = Math.floor(Math.random() * 16);
    let arrayOfUserIds = generateArrayOfUserIds(numUsers);

    while (numReviews > 0) {

      let userId = arrayOfUserIds[Math.floor(Math.random() * arrayOfUserIds.length)];
      arrayOfUserIds.splice(userId - 1, 1);
      let date = faker.date.between(releaseDates[startingGameId], '2021-01-18');
      let year = date.getFullYear();
      let month = (date.getMonth() + 1).toString().length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
      let day = (date.getDay() + 1).toString().length === 1 ? `0${date.getDay() + 1}` : date.getDay() + 1;

      let data = {
        userId: userId,
        gameId: startingGameId,
        reviewText: Math.floor(Math.random() * 11) > 5 ? "'" + faker.lorem.paragraphs() + "'" : "'" + faker.lorem.paragraph() + "'",
        isRecommended: Math.floor(Math.random() * 11) > 5 ? true : false,
        commentCount: Math.floor(Math.random() * 11),
        isHelpfulCount: Math.floor(Math.random() * 11),
        isFunnyCount: Math.floor(Math.random() * 11),
        isCleverAwardCount: Math.floor(Math.random() * 6),
        warmBlanketAwardCount: Math.floor(Math.random() * 6),
        saucyAwardCount: Math.floor(Math.random() * 6),
        slowClapAwardCount: Math.floor(Math.random() * 6),
        takeMyPointsAwardCount: Math.floor(Math.random() * 6),
        wholesomeAwardCount: Math.floor(Math.random() * 6),
        jesterAwardCount: Math.floor(Math.random() * 6),
        fancyPantsAwardCount: Math.floor(Math.random() * 6),
        whoaAwardCount: Math.floor(Math.random() * 6),
        superStarAwardCount: Math.floor(Math.random() * 6),
        wildAwardCount: Math.floor(Math.random() * 6),
        treasureAwardCount: Math.floor(Math.random() * 6),
        mindBlownAwardCount: Math.floor(Math.random() * 6),
        goldenUnicornAwardCount: Math.floor(Math.random() * 6),
        deepThoughtsAwardCount: Math.floor(Math.random() * 6),
        heartWarmingAwardCount: Math.floor(Math.random() * 6),
        hilariousAwardCount: Math.floor(Math.random() * 6),
        hotTakeAwardCount: Math.floor(Math.random() * 6),
        poetryAwardCount: Math.floor(Math.random() * 6),
        extraHelpfulAwardCount: Math.floor(Math.random() * 6),
        gottaHaveItAwardCount: Math.floor(Math.random() * 6),
        michelangeloAwardCount: Math.floor(Math.random() * 6),
        madScinetistAwardCount: Math.floor(Math.random() * 6),
        isEarlyAccessReview: Math.floor(Math.random() * 11) > 5 ? true : false,
        isPurchasedViaSteamKey: Math.floor(Math.random() * 11) > 5 ? true : false,
        isActivatedViaSteamKey: Math.floor(Math.random() * 11) > 5 ? true : false,
        userHoursOnRecordAtTimeOfReview: (Math.random() * userHoursOnRecord[userId]).toFixed(1),
        reviewLanguage: Math.floor(Math.random() * 11) > 8 ? otherLanguages[Math.floor(Math.random() * otherLanguages.length)] : "'EN'",
        reviewDate: `'${year}-${month}-${day} 00:00:00'`,
      }

      db.query(`INSERT INTO reviews (${Object.keys(data).join(', ')}) VALUES (${Object.values(data).join(', ')});`, (err) => {
        if (err) {
          console.log(`Error seeding review for gameId ${startingGameId} into table 'reviews': `, err);
          return;
        }
      });
      numReviews--;
    }
    startingGameId++;
  }

  console.log(`Reviews for all ${numGames}  seeded successfully into 'reviews' table`);
}


//----------------------------------------
//Actual seeding
//----------------------------------------


let seedDatabase = () => {
  seedUsers(252);
  seedReviews(100, 252);
};

seedDatabase();
