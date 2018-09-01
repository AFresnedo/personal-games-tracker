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
  db.wish.findAll({
    where: { userId }
  }).then((wishes) => {
    //
    // TODO send the game info of each wish
    //
    // get all gameIds
    let gameIds = [];
    wishes.forEach((wish) => {
      gameIds.push(wish.gameId);
    });
    console.log('gameIds:', gameIds);
    // for each gameId, get game info
    // TODO optimize by comparing to native javascript (or another design)
    async.parallel
    res.send(wishes);
  }).catch((err) => {
    console.log(err);
    req.flash('error', 'Unable to display requested wish list');
    res.redirect('/wishes');
  });
});

module.exports = router;
