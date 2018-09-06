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
    const wish = db.wish.findById(req.params.id);
    // TODO ask wish if it is owned by req.user
    if (req.user.admin || wish.owned(req.user.id) ) {
      res.send('admin status confirmed');
    }
    else {
      req.flash('error', 'You do not have access to that page.');
      res.redirect('/');
    }
  }
}
