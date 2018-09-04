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
    res.send('successful');
  }).catch(function(err) {
    console.error(err);
    req.flash('error', 'Unable to retrieve wish list');
    res.redirect('/wishes');
  });
});

module.exports = router;
