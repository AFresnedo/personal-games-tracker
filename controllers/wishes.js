const express = require('express');
const router = express.Router();
// for models
const db = require('../models');
// for async
const async = require('async');
// middleware
const isOwner = require('../middleware/isOwner');
// helper functions
const filters = require('../helpers/filters');

router.get('/', (req, res) => {
  // TODO prompt viewer to search for a user, return pagination of results
  res.render('wishes/index');
});

router.get('/:id', (req, res) => {
  let userId = req.params.id;
  // TODO replace query with a join, if appropriate
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
      // send only game titles
      let titles = [];
      games.forEach(function(game) {
        titles.push(game.dataValues.title);
      });
      res.render('wishes/show', { titles });
    });
  }).catch(function(err) {
    console.error(err);
    req.flash('error', 'Unable to retrieve wish list');
    res.redirect('/wishes');
  });
});

// TODO fix hardcode problem
router.get('/:id/edit', (req, res) => {
  res.send('you own this page!');
});

module.exports = router;
