import { gql } from '@apollo/client';


export const GET_VEHICLES = gql`
  query GetVehicles($limit: Int, $offset: Int) {
    getVehicles(limit: $limit, offset: $offset) {
      totalCounts
      vehicles {
        name
        brand
        description
        bodyType
        fuelType
        price
        __typename @skip(if: true)
      }
    }
  }
`;
