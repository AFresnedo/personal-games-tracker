// testing tools
const expect = require('chai').expect;
const request = require('supertest');

// to test
const app = require('../../index');
const db = require('../../models');

// setup database for testing
before(function(done) {
  db.sequelize.sync({ force: true }).then(function() {
    done();
  });
});

// async dump for debugging
after(function() {
  global.asyncDump();
});

// root route should be accessible
describe('GET /', function() {
  it('should return a 200 response', function(done) {
    request(app).get('/')
      .expect(200, done);
  });
});
