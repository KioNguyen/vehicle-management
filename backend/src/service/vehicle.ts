import { AppDataSource } from "../data-source";
import { Vehicle } from "../entity/Vehicles";
import { responseError } from "../utils/validation";
import { GraphQLError } from 'graphql/error';
import { ApolloServerErrorCode } from '@apollo/server/errors';

const getAllVehicles = async (limit = 4, offset = 0): Promise<any> => {
    const vehicles: Vehicle[] = await AppDataSource.getRepository(Vehicle)
        .createQueryBuilder("vehicle").skip(offset).take(limit).orderBy('name', 'ASC').getMany();
    const counts: number = await AppDataSource.manager.count(Vehicle);
    return { vehicles, totalCounts: counts } || [];
};

const addVehicle = async (fields): Promise<any> => {
    try {
        return await AppDataSource.getRepository(Vehicle).save({ ...fields });
    } catch (e) {
        console.log(e);
        responseError(e.table, e.message);
    };
};


const updateVehicle = async (id, fields): Promise<any> => {
    try {
        const vehicle: Vehicle = await AppDataSource.getRepository(Vehicle).findOne({ where: { id } });

        if (!vehicle)
            throw new GraphQLError('vehicle does not exist', {
                extensions: {
                    code: ApolloServerErrorCode.BAD_USER_INPUT,
                },
            });


        return await AppDataSource.getRepository(Vehicle).save({ id, ...fields });
    } catch (e) {
        console.log('error', e.message);
        responseError(e.table, e.message);
    };
};

export default { getAllVehicles, addVehicle, updateVehicle };