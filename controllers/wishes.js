// for routes
const express = require('express');
const router = express.Router();
// for models
const db = require('../models');

router.get('/', (req, res) => {
  // TODO prompt viewer to search for a user, return pagination of results
  res.render('wishes/index');
});

router.get('/:id', (req, res) => {
  let userId = req.params.id;
  db.wish.findAll({
    where: { userId }
  }).then((wishes) => {
    res.send(wishes);
  }).catch((err) => {
    console.log(err);
    req.flash('error', 'Unable to display requested wish list');
    res.redirect('/wishes');
  });
});

module.exports = router;
