// for routes
const express = require('express');
const router = express.Router();
// for models
const db = require('../models');
// for async
const async = require('async');

router.get('/', (req, res) => {
  // TODO prompt viewer to search for a user, return pagination of results
  res.render('wishes/index');
});

router.get('/:id', (req, res) => {
  let userId = req.params.id;
  // get users' wishes
  db.wish.findAll({
    where: { userId }
  }).then(function(wishes) {
    let games = [];
    // find every wished game, and add it to games, before rendering view
    async.each(wishes, function(wish, done) {
      db.game.findById(wish.gameId).then(function(found) {
        games.push(found);
        done();
      }).catch(function(err) {
        console.log('err finding game from wishlist', err);
        done();
      });
    }, function() {
      res.render('wishes/show', { games });
    });
  }).catch(function(err) {
    console.error(err);
    req.flash('error', 'Unable to retrieve wish list');
    res.redirect('/wishes');
  });
});

module.exports = router;
