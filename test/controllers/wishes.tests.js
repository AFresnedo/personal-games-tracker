const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../index');

// get lists index
describe('GET /wishes', () => {
  it('should return a 200 response', done => {
    request(app).get('/')
      .expect(200, done);
  });
});

// get lists of user
describe('GET /wishes/1', () => {
  it('should return a 200 response', done => {
    request(app).get('/lists/1')
      .expect(200, done);
  });
});
