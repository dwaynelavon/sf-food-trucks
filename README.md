# FoodTruckin'

![alt text](https://github.com/dwaynelavon/sf-food-trucks/blob/master/Screen%20Shot%202020-06-11%20at%208.57.50%20PM.png?raw=true)

## Application Flow

-   The user enters a location or chooses to search using their current location
-   The React/Typescript application uses Apollo and GraphQL to query the server with the provided location. The query is called `foodTrucksNearby`
-   The Golang server responds to the query and routes the relevant information to the `foodtruck.Service` interface implementation. This service is responsible for communicating with the store (or facade in this case), calculating the distance of all food trucks from the provided location, and then ordering them by distance.
-   The `foodtruck.Facade` is responsible for interacting with the sfgov food truck api and returning the decoded results

## Choices Made

I use the current stack of `React/Typescript/Apollo/Golang` a lot in my side projects. Also, I tend to use Redux and RxJS a lot also but seemed like overkill for the time allotted fo this solution. Since I wanted to deliver a full-stack solution in under 3 hours, I decided to use the languages/frameworks in which i'm current immersed.

I could have very well used a REST API as opposed to GQL but the nature of the data made me instantly think GQL; large data model with only a few fields needed for this particular view.

### Improvements that could be made

-   Cache api calls until the end of the day
-   Pagination of results
-   Search by zip code
-   Interactive map
-   Exhaustive testing
-   Responsive design
-   Form Validation
