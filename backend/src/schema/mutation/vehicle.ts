
import VehicleService from '../../service/vehicle';

export async function addVehicle(_, args, contextValue) {
    const res = await VehicleService.addVehicle(args);
    return !!res;
}

export async function updateVehicle(_, { id, ...args }, contextValue) {
    const res = await VehicleService.updateVehicle(id, args);
    return !!res;
}


