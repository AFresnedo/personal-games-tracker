const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../index');

const db = require('../../models');

/* lists tests should check if requests for CRUD operations are recieved
 * therefore, need to "set" database data for each test group
 *  */
before(function(done) {
  db.sequelize.sync({ force: true }).then(function() {
    done();
  });
});

// get lists index
describe('GET /lists', function() {
  it('should return a 200 response', function(done) {
    request(app).get('/')
      .expect(200, done);
  });
});

// get lists of user
describe('GET /lists/1', function() {
  it('should return a 200 response', function(done) {
    request(app).get('/lists/1')
      .expect(200, done);
  });
});
