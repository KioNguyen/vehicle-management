import { Vehicle } from "../../entity/Vehicles";
import VehicleService from '../../service/vehicle';
/* import gql from 'graphql-tag';

export const VehicleDefs = gql`
    type Vehicle {
        roleId: String!
        name: String!
    }
`;*/



export async function getVehicles(_, { limit, offset }, contextValue): Promise<{ totalCounts: number, vehicles: Vehicle[] }> {
    return await VehicleService.getAllVehicles(limit, offset);
}

