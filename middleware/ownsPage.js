module.exports = function(req, res, next) {
  if (!req.user) {
    req.flash('error', 'Please login.');
    res.redirect('/auth/login');
  }
  // if user meets identity requirements, continue
  else if (req.user.id == req.params.id) {
    next();
  }
  // else user is not allowed on that page
  else {
    req.flash('error', 'You do not have access to that page.');
    res.redirect('/');
  }
}
