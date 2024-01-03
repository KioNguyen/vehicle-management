import Container from 'typedi';
import { DBDataSource } from './database/datasource';
import { Vehicle } from './database/entities/vehicle';
import { IVehicleRepository } from './database/repositories/i-vehicle.repository';
import { VehicleRepository } from './database/repositories/vehicle.repository';
import { CreateVehicleUseCase } from './domain/usecases/vehicle/create-vehicle.usecase';
import { GetVehiclesUsecase } from './domain/usecases/vehicle/get-vehicles.usecase';
import { ICreateVehicleUseCase } from './domain/usecases/vehicle/i-create-vehicle.usecase';
import { IGetVehiclesUseCase } from './domain/usecases/vehicle/i-get-vehicles.usecase';

Container.set({ id: 'VEHICLE_REPOSITORY_SOURCE', factory: () => DBDataSource.getRepository(Vehicle) });
Container.set({ id: IVehicleRepository, factory: () => new VehicleRepository(Container.get('VEHICLE_REPOSITORY_SOURCE')) });
Container.set({ id: IGetVehiclesUseCase, factory: () => new GetVehiclesUsecase(Container.get(IVehicleRepository)) });
Container.set({ id: ICreateVehicleUseCase, factory: () => new CreateVehicleUseCase(Container.get(IVehicleRepository)) });

export default Container;
