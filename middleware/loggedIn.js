module.exports = function(req, res, next) {
  // if user is not logged on, redirect to login
  if (!req.user) {
    req.flash('error', 'You do not have access to that page.');
    res.redirect('/auth/login');
  }
  // else continue normal controller operation
  else {
    next();
  }
};
