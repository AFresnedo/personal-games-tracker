// for models
const db = require('../../models');
// for chai
const expect = require('chai').expect;

// unit test suite for wish model
describe('Wish Model Unit Tests', function() {

  //
  // shared test objects
  //
  let unSavedOne;

  // prepare database for wish model test suite
  before(function(done) {
    db.sequelize.sync({ force: true }).then(function() {
      done();
    });
  });

  // setup basic not-yet-saved testing data
  before(function() {
    unSavedOne = db.wish.build({
      gameId: 1,
      userId: 1,
      hype: 1,
      notes: 'yes, they are all 1s'
    });
  });

  describe('owner is properly identified', function() {
    it('should deny wrong owner', function() {
      expect(unSavedOne.owned(2)).to.be.false;
    });
    it('should confirm correct owner', function() {
      expect(unSavedOne.owned(1)).to.be.true;
    });
  });

});
