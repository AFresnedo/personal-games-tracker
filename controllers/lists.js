const express = require('express');
const passport = require('../config/passportConfig');

const db = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
  // what even is this?
  // a pagination of all the lists of everybody? lol
  // i guess....
  // i suppose there could be some search here or something
  res.send('reached list index');
});

router.get('/:id', (req, res) => {
  res.send('reached lists of user: ' + req.params.id);
});

module.exports = router;
