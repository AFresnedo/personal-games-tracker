const db = require('../../models');

// unit test suite for wish model
describe('Wish Model Unit Tests', function() {

  // prepare database for wish model test suite
  before(function(done) {
    db.sequelize.sync({ force: true }).then(function() {
      done();
    });
  });

  // setup basic not-yet-saved testing data
  before(function(done) {
    const unsavedOne = Wish.build({
      gameId: 1,
      userId: 1,
      hype: 1,
      notes: 'yes, they are all 1s'
    });
  });

  describe('Incorrect owner is denied', function() {
  });

  describe('Correct owner is confirmed', function() {
  });

});
