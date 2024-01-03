import { Inject, Service } from 'typedi';
import { Repository } from 'typeorm';
import { GetVehiclesFilterInput } from '../../domain/dto/get-vehicles-filter-input.dto';
import { AbstractRepository } from '../../libs/database';
import { Vehicle } from '../entities/vehicle';
import { PaginationArgument } from './../../domain/dto/pagination-argument.dto';
import { Pagination } from './../../libs/types/pagination';

@Service()
export class VehicleRepository extends AbstractRepository<Vehicle> {
  constructor(
    @Inject('VEHICLE_REPOSITORY_SOURCE')
    _repository: Repository<Vehicle>
  ) {
    super(_repository);
  }

  async getAllWithPaginationAndFilter(pagination: PaginationArgument, filter: GetVehiclesFilterInput): Promise<Pagination<Vehicle>> {
    const limit = +pagination.limit;
    const page = +pagination.page;
    const queryBuilder = await this._repository.createQueryBuilder('vehicle');
    const searchStringFields = ['name'];
    if (filter) {
      Object.keys(filter).forEach(key => {
        if (filter[key]) {
          queryBuilder.andWhere(`vehicle.${key} ${searchStringFields.includes(key) ? 'like' : '='} :${key}`, { [key]: searchStringFields.includes(key) ? `%${filter[key]}%` : filter[key] });
        }
      });
    }
    return this.paginate(page, limit, queryBuilder);
  }
}
