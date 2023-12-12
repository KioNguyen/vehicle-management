# Backend

## Getting Started

1. Install all dependencies
2. Replace the credentials in `src/data-source.ts` to your credentials


## Part 1

1. Start in `src/entity/Vehicles.ts`, here you will define a class that maps to a database table called `vehicles`.

2. You will find in `src/types.ts` some enums that we have defined for you to use for your `vehicles` table.

Generally each vehicle should have the following details:

- Make
- Name
- Body Type
- Fuel Type
- Price
- Exterior Color
- Interior Color

3. Feel free to add on any other details that you think is fitting.


## Part 2

1. Now that you have your `vehicles` table set up, it's time to create some routes!

3. First define a route to add a vehicle into your `vehicles` table

2. Second define a route to retrieve all the vehicles

You should be able to filter by: 

- Body Type
- Fuel Type
- Price Range (E.g Between 20,000 - 100,000)



## Bonus Part

This is a bonus section if you're feeling up to it! 

1. Convert your backend code to use GraphQL

[TypeGraphQL Docs](https://typegraphql.com/docs/getting-started.html)
[Apollo Server Docs](https://www.apollographql.com/docs/apollo-server/)