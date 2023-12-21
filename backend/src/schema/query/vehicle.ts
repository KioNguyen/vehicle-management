import { Vehicle } from "../../entity/Vehicles";
import VehicleService from '../../service/vehicle';
/* import gql from 'graphql-tag';

export const VehicleDefs = gql`
    type Vehicle {
        roleId: String!
        name: String!
    }
`;*/



export async function vehicles(_, { limit, offset }, contextValue): Promise<Vehicle[]> {
    return await VehicleService.getAllVehicles(limit, offset);
}

