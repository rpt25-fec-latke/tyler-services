const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('API Endpoints', () => {

  it('Should retrieve the reviews for a game based on a valid query parameter ID for endpoint \'/reviews\'', async (done) => {
    let res = await request.get('/reviews?id=1');

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    done();
  });

  it('Should return a status code of 500 when the query parameter ID is an out of bounds ID for endpoint \'/reviews\'', async (done) => {
    let res = await request.get('/reviews?id=150');

    expect(res.status).toBe(500);
    done();
  });

  it('Should return review stats for a game based on a valid query parameter ID for endpoint \'/review_counts\'', async (done) => {
    let res = await request.get('/review_counts?id=1');

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    done();
  });

  it('Should return a status code of 500 when the query parameter ID is an out of bounds ID for endpoint \'/review_counts\'', async (done) => {
    let res = await request.get('/review_counts?id=150');

    expect(res.status).toBe(500);
    done();
  });
});
