const db = require('../../models');

// unit test suite for wish model
describe('Wish Unit Tests', function() {

  // prepare database for wish model test suite
  before(function(done) {
    db.sequelize.sync({ force: true }).then(function() {
      done();
    });
  });

});
