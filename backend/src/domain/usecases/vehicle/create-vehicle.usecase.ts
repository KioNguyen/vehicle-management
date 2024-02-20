import { CreateVehicleInput } from 'src/domain/dto/create-vehicle-input.dto';
import { Inject, Service } from 'typedi';
import { Vehicle } from '../../../database/entities/vehicle';
import { IVehicleRepository } from '../../../database/repositories/i-vehicle.repository';

@Service()
export class CreateVehicleUseCase {
  constructor(
    @Inject(IVehicleRepository)
    private readonly vehicleRepo: IVehicleRepository
  ) {}

  async execute(req: CreateVehicleInput): Promise<Vehicle> {
    try {
      return await this.vehicleRepo.save(req);
    } catch (error) {
      console.log('🚀 ~ file: get-vehicles.ts:20 ~ GetVehicles ~ execute ~ error:', error);
    }
  }
}
