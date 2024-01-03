import 'reflect-metadata';
import { Arg, Query, Resolver } from 'type-graphql';
import { Inject, Service } from 'typedi';
import { Vehicle } from '../database/entities/vehicle';
import { PaginationArgument } from '../domain/dto/pagination-argument.dto';
import { GetVehiclesResponse } from '../domain/types/get-vehicle-response.type';
import { IGetVehiclesUseCase } from './../domain/usecases/vehicle/i-get-vehicles.usecase';

@Service()
@Resolver(_of => Vehicle)
export class VehicleResolver {
  constructor(
    // Inject service
    @Inject(IGetVehiclesUseCase)
    private readonly getVehiclesUsecase: IGetVehiclesUseCase
  ) {}

  @Query(() => GetVehiclesResponse, { name: 'getListVehicle' })
  async getListVehicle(@Arg('pagination', { nullable: true, validate: true }) pagination?: PaginationArgument): Promise<GetVehiclesResponse> {
    try {
      return await this.getVehiclesUsecase.execute(pagination);
    } catch (error) {
      console.log('🚀 ~ file: verhicle.resolver.ts:21 ~ VehicleResolver ~ getListVehicle ~ error:', error);
    }
  }
}
