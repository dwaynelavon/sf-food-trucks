# FoodTruckin'

![alt text](https://github.com/dwaynelavon/sf-food-trucks/blob/master/Screen%20Shot%202020-06-11%20at%208.57.50%20PM.png?raw=true)

## Application Flow

-   The user enters a location or chooses to search using their current location
-   The React/Typescript application uses Apollo and GraphQL to query the server with the provided location. The query is called `foodTrucksNearby`
-   The Golang server responds to the query and routes the relevant information to the `foodtruck.Service` interface implementation. This service is responsible for communicating with the store (or facade in this case), calculating the distance of all food trucks from the provided location, and then ordering them by distance.
-   The `foodtruck.Facade` is responsible for interacting with the sfgov food truck api and returning the decoded results

### Improvements that could be made

-   Cache api calls until the end of the day
-   Pagination of results
-   Search by zip code
-   Interactive map
-   Exhaustive testing
-   Responsive design
-   Form Validation
