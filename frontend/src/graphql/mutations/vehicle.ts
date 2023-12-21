import { gql } from '@apollo/client';

export const ADD_VEHICLE = gql`
  mutation AddVehicle(
    $name: String!
    $brand: VehicleEnumType!
    $bodyType: VehicleBodyEnumType!
    $fuelType: VehicleFuelEnumType!
    $description: String
    $price: Int
  ) {
    addVehicle(
      name: $name
      brand: $brand
      bodyType: $bodyType
      fuelType: $fuelType
      description: $description
      price: $price
    )
  }
`;