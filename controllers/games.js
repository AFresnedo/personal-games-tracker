const express = require('express');
const router = express.Router();
// for models
const db = require('../models');
// middleware
const loggedIn = require('../middleware/loggedIn');

// TODO games index, pagination, search
router.get('/', (req, res) => {
  res.render('games/index');
});

// TODO show detailed game information
router.get('/:id', (req, res) => {
});

/* pre; recieve ajax call with new game info
 * post: update game with new info, return success/failure msg
 */
router.patch('/:id', loggedIn, function(req, res) {
  // TODO syntax
  db.games.update({ req.body }).then(function(success) {
    res.send('successfully edited game');
  }).catch(function(err) {
    res.error('game edit was not successful');
  });
  // TODO give contributor credit
});

router.delete('/:id', function(req, res) {
  if (req.user.admin) {
    res.send('you are allowed to delete this game');
  }
  else {
    req.flash('error', 'That action is denied.');
    res.redirect('/');
  }
});

module.exports = router;
