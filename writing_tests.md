# Test Types

## Unit Tests

* view
    * ignored, eye inspection is superior
    * testable content may iterate too rapidly to justify overhead

* controller
    * routing
    * user authorization/authentication
        * technically integration testing, but don't be literal

* models
    * queries

* middleware
    * skip middlware that is more relevant in integration testing
        * a good example for this is currentUser
            * or can i make a unit test for checking currentUser filter?
    * simple pre/post for "helper" middleware

## Integration Tests

* view-controller
    * a basic "user story"
        * reaching the landing page and then going to signup form as guest

* view-controller-model
    * a more complex user story
        * get to site as guest
        * login
        * goto profile
        * edit profile
        * submit edited profile
        * see changes
