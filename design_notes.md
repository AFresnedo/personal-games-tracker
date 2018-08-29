# Contributors

* filling out game info requires a lot of community work
* giving credit is right
* gamifiying the process will encourage contributions
    * also minor but, obviously reward with free subscription
        * 10 games = free year? (so 2 dollars credit)

# Subscription

* biannual
    * 1 dollar every 6 months
* keep the bots out
* give away free subscriptions as incentives
* subscriptions do NOT prevent played/wish list usage
    *  only ratings and info creation

# Donations

* no
* donations are kind of weird and intrusive / annoying seeing them everywhere

* "please just give half of your intended to donation to the first reasonable
* charity you find. It makes me feel better, it'll make you feel better, and
* most importantly it'll make whoever recieces the needed help feel better."

# Data Scraping

## Sources

* greenmangaming
* amazon
* wikipedia
* gamepedia
* wookiepedia
* (fan-pedias)
* origin
* steam
* humble bundle
* (forums)

## Permanent

* isn't there something better than data scraping?
    * maybe data scrape -> create seed data
        * problem with this is that it isn't on demand
            * too many games to seed

* released games

## Dynamic

* upcoming releases (including early-access)

* careful...

# Trello

# UX

* easy import
    * can i import steam wishlist? origin? gog?
        * amazon, greenmangaming?

* compatiable with HLTB?
    * as in, use both....? hrm

# Styles

* this is what sets my game data apart
* this should be a table
    * need Brandi's help here
    * I want this to be a table but maybe it's just an array

## Table or Not

### Pros

* queries
* adding styles
* removing styles
* authorative list

### Cons

* requires query(s) to get a single game's styles
* how do I even link this? a massive join table?
    * games (many) to styles (many)

# Genres

## Table or Not

* yes, similar to styles and I need to be able to "display all genres"
    * for plenty of reasons, but a good one is a dropdown select

# Ratings

## Subscribed or Basic user

* intended design is to ignore ratings of basic users
    * however, this is not simple to implement
    * think about what happens when a user subscribes after having a big list
    * think about when a subscription ends, do ratings update globally?
    * think about how ratings, that are not counted, are stored
        * another "offline ratings" table?
            * this then gets merged into "online ratings"?

# Social Stuff

## Forum

## Following

* atm, people just bookmark other people's profile
* following is preferred because it offloads the bookmarking to the app
