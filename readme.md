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

## Routes

| Method | Path | Purpose |
| ------ | -------------------- | ---------------------------------- |
| GET | / | Home Page |
| GET | /profile | Profile page (must be a logged in user) |
| GET | /auth/login | Login form page |
| POST | /auth/login | Login submission + Redirect to Profile|
| GET | /auth/signup | Signup Form Page |
| POST | /auth/signup | Signup Submission + Redirect to Profile |
| GET | /auth/logout | Logout + Redirect to Home |
| GET | /wishes | Search Index for Wish Lists |
| GET | /wishes/:id | Wish List for Given User |
| POST | /wishes/:id | Wish List Entry Creation Submission |
| PATCH | /wishes/:id | Wish List Edit Submission |
| DELETE | /wishes/:id | Delete Wish List Entry for Given User |
