const request = require('supertest');
const app = require('../../index');

describe('Wishes Controller Unit Tests', function() {

  // get search for all wishes page
  describe('GET /wishes', () => {
    it('should return a 200 response', done => {
      request(app).get('/')
        .expect(200, done);
    });
  });

  // get given user's wish list page
  describe('GET /wishes/1', () => {
    it('should return a 200 response', done => {
      request(app).get('/wishes/1')
        .expect(200, done);
    });
  });

});
