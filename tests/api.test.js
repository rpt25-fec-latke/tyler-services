const supertest = require('supertest');
const app = require('../server');

const request = supertest(app);

describe('API Endpoints', () => {
  it('Should retrieve all of the reviews for a game based on a valid query parameter ID for endpoint \'/reviews\'', async (done) => {
    const res = await request.get('/reviews?id=1');

    expect(res.status).toBe(200);
    done();
  });

  it('Should return a status code of 500 when the query parameter ID is an out of bounds ID for endpoint \'/reviews\'', async (done) => {
    const res = await request.get('/reviews?id=150');

    expect(res.status).toBe(500);
    done();
  });

  it('Should respond with 4 properties each related to review data after a request is sent to the \'/reviews\' endpoint for a valid id', async (done) => {
    const res = await request.get('/reviews?id=1');

    expect(res.body).toBeDefined();
    expect(res.body.mostHelpfulLastThirty).toBeDefined();
    expect(res.body.mostRecentLastThirty).toBeDefined();
    expect(res.body.allReviews).toBeDefined();
    expect(res.body.reviewStats).toBeDefined();
    done();
  });

  it('Should respond with a correct review rating group after a request is sent to the \'/reviews\' endpoint for a valid id', async (done) => {
    const res = await request.get('/reviews?id=50');

    expect(res.body.reviewStats.overallRatingGroup).toBeDefined();
    done();
  });

  it('Should return review stats for a game based on a valid query parameter ID for endpoint \'/review_counts\'', async (done) => {
    const res = await request.get('/review_counts?id=1');

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    done();
  });

  it('Should return a status code of 500 when the query parameter ID is an out of bounds ID for endpoint \'/review_counts\'', async (done) => {
    const res = await request.get('/review_counts?id=150');

    expect(res.status).toBe(500);
    done();
  });
});
