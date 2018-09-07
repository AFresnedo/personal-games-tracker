// load value-hidden variables
require('dotenv').config();
// load modules
const bodyParser = require('body-parser'); // for req.body
const ejsLayouts = require('express-ejs-layouts'); // view engine
const express = require('express'); // web framework
const flash = require('connect-flash'); // flash messages
const passport = require('./config/passportConfig'); // auth middleware
const session = require('express-session'); // persistant logins

// declare application
const app = express();

//
// set and use statements
//
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
// flash and passport depend on session
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// middleware for all controller routes
app.use( (req, res, next) => {
  // add user ident to for-view scope: res.locals
  res.locals.currentUser = req.user;
  // add flash alerts, from controllers, to for-view scope: res.locals
  res.locals.alerts = req.flash();
  next();
});

// include controllers (alphabetical order if nothing else)
app.use('/auth', require('./controllers/auth'));
app.use('/profile', require('./controllers/profile'));
app.use('/wishes', require('./controllers/wishes'));

// routes outside of controllers
app.get('/', (req, res) => {
  res.render('home');
});

// open a socket, if index wasn't sourced
if (!module.parent) {
  app.listen(process.env.PORT || 3000);
}

// for testing
module.exports = app;
