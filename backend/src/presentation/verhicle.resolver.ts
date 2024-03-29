import 'reflect-metadata';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Inject, Service } from 'typedi';
import { Vehicle } from '../database/entities/vehicle';
import { CreateVehicleInput } from '../domain/dto/create-vehicle-input.dto';
import { GetVehiclesFilterInput } from '../domain/dto/get-vehicles-filter-input.dto';
import { PaginationArgument } from '../domain/dto/pagination-argument.dto';
import { GetVehiclesResponse } from '../domain/types/get-vehicle-response.type';
import { ICreateVehicleUseCase } from '../domain/usecases/vehicle/i-create-vehicle.usecase';
import { IGetVehiclesUseCase } from './../domain/usecases/vehicle/i-get-vehicles.usecase';

@Service()
@Resolver(() => Vehicle)
export class VehicleResolver {
  constructor(
    // Inject service
    @Inject(IGetVehiclesUseCase)
    private readonly getVehiclesUsecase: IGetVehiclesUseCase,
    @Inject(ICreateVehicleUseCase)
    private readonly createVehicleUseCase: ICreateVehicleUseCase
  ) {}

  @Query(() => GetVehiclesResponse, { name: 'getListVehicle' })
  async getListVehicle(
    @Arg('pagination', { nullable: true, validate: true }) pagination: PaginationArgument,
    @Arg('filter', { nullable: true, validate: true }) filter: GetVehiclesFilterInput
  ): Promise<GetVehiclesResponse> {
    try {
      return await this.getVehiclesUsecase.execute({ pagination, filter });
    } catch (error) {
      console.log('🚀 ~ file: verhicle.resolver.ts:21 ~ VehicleResolver ~ getListVehicle ~ error:', error);
    }
  }

  @Mutation(() => Vehicle)
  async createVehicle(@Arg('vehicle') vehicle: CreateVehicleInput): Promise<Vehicle> {
    return await this.createVehicleUseCase.execute(vehicle);
  }
}
