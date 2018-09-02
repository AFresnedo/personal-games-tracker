// testing tools
const expect = require('chai').expect;
const request = require('supertest');

// to test
const app = require('../../index');
const db = require('../../models');

// root route should be accessible
describe('GET /', () => {
  it('should return a 200 response', done => {
    request(app).get('/')
      .expect(200, done);
  });
});
