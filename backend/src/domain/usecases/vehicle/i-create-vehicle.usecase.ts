import { Vehicle } from 'src/database/entities/vehicle';
import { CreateVehicleInput } from 'src/domain/dto/create-vehicle-input.dto';

export const ICreateVehicleUseCase = 'ICreateVehicleUseCase';

export interface ICreateVehicleUseCase {
  execute(data: CreateVehicleInput): Promise<Vehicle>;
}
