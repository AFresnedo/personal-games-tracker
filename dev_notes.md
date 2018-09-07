# Models

## Contribution

* validate that "field" is a column in DB for respective table

## Genre

* validate long is not null
    * okay if short is null
    * probably want some kind of "real genre" check
        * query and compare with igdb?

# Seeds

* is "down" required and/or useful?

* auto-generate big seed files using....

# Middelware

* view helper, filter, data manipluation/preperation, etc
    * includes "display data as json" internet example
        * the importance of this example was...
            * the function performed, changing the data presentation
                * was not a concern for any part of MVC
    * an example of data prep is the bodyParser preparing form data for use
        * bodyParser is taking data in req and writing to req.body
* for organization,
    * have controller use blocks of middleware organized in single functions
        * so something like "is_user"
            * calls all relevant middleware for authorizing this permission
