const express = require('express');
const router = express.Router();
// for models
const db = require('../models');
// for async
const async = require('async');
// middleware
const loggedIn = require('../middleware/loggedIn');
const isOwner = require('../middleware/isOwner');

router.get('/', (req, res) => {
  // TODO prompt viewer to search for a user, return pagination of results
  res.render('wishes/index');
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  // TODO replace query with a join, if appropriate
  // get users' wishes
  db.wish.findAll({
    where: { userId }
  }).then(function(wishes) {
    let wishList = [];
    // find every wished game and attach it to the wish, then send to view
    async.each(wishes, function(wish, done) {
      db.game.findById(wish.gameId).then(function(found) {
        wishList.push({ wishId: wish.id, gameTitle: found.title });
        done();
      }).catch(function(err) {
        console.log('err finding game from wishlist', err);
        done();
      });
    }, function() {
      res.render('wishes/show', { wishList, ownerId: userId });
    });
  }).catch(function(err) {
    console.error(err);
    req.flash('error', 'Unable to retrieve wish list');
    res.redirect('/wishes');
  });
});

router.delete('/:id', isOwner, function(req, res) {
  res.send('you own this page!');
});

module.exports = router;
