# Topic

This case came about when trying to write the controller route function for
"get wish list of a given user".

# First Approach

## In Wishes Controller,

* write query to get ids of all games wish listed by user
* write query to get all games with said IDs
* return relevant columns of games as a paremeter to view

### Testing First Implementation

* difficult, what are we testing?
    * route connects
    * first query is sane
    * first query return is correct
    * second query is sane
    * second query return is correct
* all these tests for one route? exhausting!
* would be nicer if we only tested the routes in the controller

### Not DRY

* very common queries that are core to the model's design
    * we should write them in the model, instead of rewriting them every time

### Not Utilizing Model

* writing in model gives a more proper seperation of interests
    * controllers do not need to know if a column name is changed

# Second Approach

## Skinny Controller

* easier to maintain
    * interface of query less likely to change than the implementation
* easier to test
    * unit test need only test if the parameters and routes are correct
        * skips testing proper retrieval of data

## Fatter Model

* create a function in model that performs the query
    * now, only 1 place to make changes to query
    * now, only 1 place to test if the query is performing correctly
