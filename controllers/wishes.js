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
  let id = req.params.id;
  // get user's model
  db.user.findOne({
    where: { id }
  }).then(function(user) {
    try {
      user.getWishes();
      res.send('successful');
    }
    catch(err) {
      console.error(err);
      req.flash('error', 'Unable to display requested wish list');
      res.redirect('/wishes');
    }
  }).catch(function(err) {
    console.error(err);
    req.flash('error', 'Unable to retrive requested user\'s wish list');
    res.redirect('/wishes');
  });
});

module.exports = router;
