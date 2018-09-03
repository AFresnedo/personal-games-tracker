# Models

## Game

* metacritic rating
    * others similar
    * legality issues?
* copies sold
* players
    * singleplayer campaign, multiplayer only, etc

## Played_Game

* hours played
* rating granularity options
    * more ratings per game

# Stuff To Do

* import real genre data
* drag & drop functionality for wish list
* light/dark themes

# MVP

* two functional lists
    * wish list
    * played list
* some sort of scraping sample
    * substitute api for it if possible, check noteboox & nate's slack
* styling / responsiveness
    * complete materialize implementation
    * custom palette
    * convincing list and list usage
        * generic is okay
* users done
    * authentication
    * authorization
* played\_games data storage & basic retrieval done
    * list index for each user
    * add a played_game
        * data validation
* wishes data storage & basic retrieval done
    * list index for each user
    * add a wish
        * data validation
* search functionality

# Stretch Goals

* useful scraping
    * filling out games info not in database
        * not in database means "input not provided by user"
    * release year, genre, etc
* production-sized game seeds
    * would require some sort of import from published game libraries
    * alternatively, a fantastic scrape
* convincing UX
    * appealing for investors
    * ready for out of company testing
* import functionality
    * txt
    * excel
    * other tools
        * HLTB
        * steam
        * GOG
* recommendations
    * genre-locked, developer-locked
    * ratings based
    * % of users based
    * combo based (high rating of high % of users, for ex)
        * 80% of users who meet these conditions rated these games highly
    * utilize negative ratings for "similar to you"
