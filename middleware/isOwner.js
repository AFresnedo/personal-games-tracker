const db = require('../models');

module.exports = function(req, res, next) {
  // if user is not logged on, direct to login
  if (!req.user) {
    req.flash('error', 'Please login.');
    res.redirect('/auth/login');
  }
  // else confirm user is admin or owner
  else {
    // TODO find wish
    // TODO ask wish if it is owned by req.user
    if (req.user.admin || false ) {
      res.send('admin status confirmed');
    }
    else {
      req.flash('error', 'You do not have access to that page.');
      res.redirect('/');
    }
  }
}
