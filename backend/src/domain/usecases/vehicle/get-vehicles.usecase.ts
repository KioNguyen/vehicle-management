import { GetVehiclesFilterInput } from 'src/domain/dto/get-vehicles-filter-input.dto';
import { Inject, Service } from 'typedi';
import { Vehicle } from '../../../database/entities/vehicle';
import { IVehicleRepository } from '../../../database/repositories/i-vehicle.repository';
import { IPaginationMeta, Pagination } from '../../../libs/types/pagination';
import { PaginationArgument } from '../../dto/pagination-argument.dto';
import { GetVehiclesResponse } from './../../../domain/types/get-vehicle-response.type';

@Service()
export class GetVehiclesUsecase {
  constructor(
    @Inject(IVehicleRepository)
    private readonly vehicleRepo: IVehicleRepository
  ) {}

  async execute(req: { pagination: PaginationArgument; filter: GetVehiclesFilterInput }): Promise<GetVehiclesResponse> {
    const { pagination, filter } = req;
    console.log('🚀 ~ file: get-vehicles.usecase.ts:18 ~ GetVehiclesUsecase ~ execute ~ filter:', filter);
    const { page, limit } = pagination;
    let result: Pagination<Vehicle, IPaginationMeta>;
    try {
      result = await this.vehicleRepo.getAllWithPaginationAndFilter(pagination, filter);
      const { items, meta } = result;

      return {
        items,
        pagination: {
          total: meta.totalItems,
          totalPage: meta.totalPages,
          limit: meta.itemsPerPage,
          page: meta.currentPage
        }
      };
    } catch (error) {
      console.log('🚀 ~ file: get-vehicles.ts:20 ~ GetVehicles ~ execute ~ error:', error);
    }
  }
}
