# README FOR DEVELOPERS

## Setting Up Your ENV File

This app requires you to have a .env file, in the top dir, with the following:
```
SESSION_SECRET='set_your_session_secret_here_developer'
FILE_PATH='./seeders/real-game-list.txt'
IGDB_API_KEY='set_your_igdb_api_key_here_developer'
```
> Please use your own values for SESSION_SECRET and IGDB_API_KEY. You may edit
> the FILE_PATH value for your own convienence, or leave it as is.

## Databases

This app is currently setup to use PostgresSQL.

### Create Development Database

```
$ createdb pgt
```

### Create Test Database

```
$ createdb pgt_test
```

## Tests

Tests are run using Mocha and are written using Chai.

To run all the tests,

```
$ npm test
```

> Please refer to Mocha's documentation for selecting individual test suites.

## Seeds

Seeds require a game list, retrieved from the Internet Games Database api.
To retrieve games using the default settings, simply run:

```
$ node ./seeders-helpers/games.js
```

> Instructions for editing settings are provided in
> ./seeders-helpers/games.js

Afterwards, you can clear the DB data and run all the seeds using:

```
$ ./seeds.sh
```

## Routes

> NOTICE: patch, post, delete methods and the /wishes index are not yet
> implemented

| Method | Path | Purpose |
| ------ | -------------------- | ---------------------------------- |
| GET | / | Home Page |
| GET | /profile | Profile page (must be a logged in user) |
| GET | /auth/login | Login form page |
| POST | /auth/login | Login submission + Redirect to Profile|
| GET | /auth/signup | Signup Form Page |
| POST | /auth/signup | Signup Submission + Redirect to Profile |
| GET | /auth/logout | Logout + Redirect to Home |
| PATCH | /games/:id | Edit Game Information |
| GET | /wishes | Search Index for Wish Lists |
| GET | /wishes/:id | Wish List for Given User |
| POST | /wishes/:id | Wish List Entry Creation Submission |
| DELETE | /wishes/:id | Delete Wish List Entry for Given User |


---

# README FOR USERS

# Personal Games Tracker

## What Is It?

An app for users to keep a history of their played games and game wish list.
Users can also share their lists with others. Based on their history and
tastes, the app can recommend games to add to a user's wish list.

## Features for User Tiers

### All

* viewing access to any public lists

### Registered

* personal played list
* personal wish list
* app recommendations

### Registered & Subscribed

* have their ratings and hype values added to community metrics, if desired
* rights to edit the app's game library

---

# README FOR INSTRUCTORS

## Problems

### Where To Write The Code

I had a lot of problems figuring out where I should put my code. Following the
labs and previous assignments, I would have ended up writing the vast majority
of my back-end logic in the controllers. I knew I did not want this to be my
end result because it would have made maintaining the app very difficult. I've
seen this problem addressed as a lack of "seperation of concerns". I knew that
I needed to have my models performing more of the work (business logic
according to stackoverflow?) To list some issues I had/foresaw:

* not DRY
* controller too fat
    * C in MVC doing too much of the work

### Writing Tests

It was very difficult trying to write appropriate tests for my app. I did not
know how to get things organized so that the tests could test effeciently. To
explain further, I wanted to write tests for code that would survive further
development. Without planning, I would have had to write a bunch of tests
wrapping unrefactored and (incorrectly) tightly coupled code. This would have
resulted in the majority of the tests quickly losing their value as the code
was fundementally rewritten (shattering the tests). A document of my test
design strategy is in writing_tests.md

### Syntax, Writing Slowly

My project demanded a lot of code in the back-end to supplement even a basic
front-end. At the time, I was unable to complete the demands of my project to
even make MVP. I think the MVP was do-able, in the time given, with more
comfort in the syntax for Express, Sequelize, and Mocha/Chai. I simply spent
too much time thinking about where things should go and looking up how to write
it.
