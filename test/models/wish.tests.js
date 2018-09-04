const db = require('../../models');

// unit test suite for wish model
describe('Wish Model Unit Tests', function() {

  // prepare database for wish model test suite
  before(function(done) {
    db.sequelize.sync({ force: true }).then(function() {
      done();
    });
  });

  describe('Get All Wishes of User 1', function() {
    let userId = 1;
    db.wish.findAll({
      where: { userId }
    });
  });

});
