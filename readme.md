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

## App Configuration

### User Model

| Column Name | SQL Type | Notes |
| ----------- | -------- | ------------------------------------ |
| id | Integer | serial primary key |
| createdAt | Date | automatically generated |
| updatedAt | Date | automatically generated |
| firstname | String | - |
| lastname |  String | - |
| email | String | usernameField for login |
| password | String | hashed with bcrypt |
| dob | Date | date of birth |
| admin | Boolean | privilege level flag |

> NOTE: Change these fields in both the model and migration files BEFORE
> running sequelize db:migrate (if you don't want them exactly as they are)

### Default Routes Supplied

| Method | Path | Purpose |
| ------ | -------------------- | ---------------------------------- |
| GET | / | Home Page |
| GET | /profile | Profile page (must be a logged in user) |
| GET | /auth/login | Login form page |
| POST | /auth/login | Login submission + Redirect to Profile|
| GET | /auth/signup | Signup Form Page |
| POST | /auth/signup | Signup Submission + Redirect to Profile |
| GET | /auth/logout | Logout + Redirect to Home |

### Controllers
#### Auth
* authentication and authorization
#### Profile
* show user info
#### index.js
* remaining routes

## Steps to Use

#### 1. Clone repo, buth wit ha different name!

```
$ git clone <repo_link> <new_name>
```

#### 2. Create a new database for your new project.

```
$ createdb <new_db_name>
```

#### 3. Open `config.json` and change the following:

* Change database name to match name in step 2
* Set username/password for your local environment
* Set the SQL dialect to match what you're using

> NOTE: If changing from Postgres, you will need different node_modules

#### 4. Check models and migrations for your needs

For example, if you don't need the `admin` column, you will want to delete it
from the migrations and model for the user. Likewise, if you need to add
something, add in both files.

#### 5. Install node modules from `package.json`

```
$ npm install
```


#### 6. Run the migrations

```
$ sequelize db:migrate
```

#### 7. Add a `.env` file with a `SESSION_SECRET` variable

This can be set to anything password-like.

#### 8. Run your server and make sure everything works

If you have nodemon installed globally,
```
$ nodemon
```

> NOTE: nodemon will update your local server on file changes

Otherwise,
```
$ node index.js
```

#### 9. Create a new repository for the new project

* Create a new repository on your personal Github account.
* Delete the old remote locations
* Add as a new remote location
```
$ git remote remove github
$ remote add github <new_repo_link>
$ git add -A
$ git commit -m "init repo"
$ git push -u github master
```

> NOTE: Do NOT make commits from new project to auth boilerplate. Only commit
> to boilerplate if you are updating the template itself.

#### 10. Update names from template ones

* Title in layout.ejs
* Logo in navbar
* Descript/Repo link in package.json
* Remove auth boilerplate readme content

## Next steps

Begin development!
