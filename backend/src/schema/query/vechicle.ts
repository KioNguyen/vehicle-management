import { Vechicle } from "../../entity/Vehicles";
import VechicleService from '../../service/vechicle';
/* import gql from 'graphql-tag';

export const VechicleDefs = gql`
    type Vechicle {
        roleId: String!
        name: String!
    }
`;*/



export async function vechicles(_, { limit, offset }, contextValue): Promise<Vechicle[]> {
    return await VechicleService.getAllVechicles(limit, offset);
}

