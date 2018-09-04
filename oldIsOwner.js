module.exports = function(req, res, next) {
  // if user is not logged on, redirect to login
  if (!req.user) {
    req.flash('error', 'Please login.');
    res.redirect('/auth/login');
  }
  // if user meets identity requirements, continue
  else if (req.user.id === ownerId) {
    console.log('req.user.id is', req.user.id);
    console.log('ownerId is', ownerId);
    next();
  }
  // else user is not allowed on that page
  else {
    req.flash('error', 'You do not have access to that page.');
    res.redirect('/');
  }
};
