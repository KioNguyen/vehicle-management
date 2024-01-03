import Container from 'typedi';
import { DBDataSource } from './database/datasource';
import { Vehicle } from './database/entities/vehicle';
import { IVehicleRepository } from './database/repositories/i-vehicle.repository';
import { VehicleRepository } from './database/repositories/vehicle.repository';
import { GetVehiclesUsecase } from './domain/usecases/vehicle/get-vehicles.usecase';
import { IGetVehiclesUseCase } from './domain/usecases/vehicle/i-get-vehicles.usecase';

Container.set({ id: 'VEHICLE_REPOSITORY_SOURCE', factory: () => DBDataSource.getRepository(Vehicle) });
Container.set({ id: IVehicleRepository, factory: () => new VehicleRepository(Container.get('VEHICLE_REPOSITORY_SOURCE')) });
Container.set({ id: IGetVehiclesUseCase, factory: () => new GetVehiclesUsecase(Container.get(IVehicleRepository)) });

export default Container;
