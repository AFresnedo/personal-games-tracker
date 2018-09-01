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

### Not Utilizing M of MVC

* writing in model gives a more proper seperation of interests
    * controllers should not need to know if a column name is changed

# Second Approach

## Skinny Controller by Removing Query Implementation

* easier to maintain
    * interface of query less likely to change than the implementation
    * before, if anything had changed about how the query is performed,
        * it would break every single controller that had used it
        * every controller using it would need to be updated, one by one

## Fatter Model by Adding Query Implementations

* now, only 1 place to make changes to query, for all usages to be updated
* easier to find
    * just do a search for the model method call, to see who uses it
    * the actual implementation is only inside the model, instead of spread out

## Easier Testing

* test the models for validity of data retrieval
    * now, only 1 place to test each validity of each type of query
* only test the controllers for proper routing/redirecting and parameters
    * without fatter models, would need to test the retrieved data for each
