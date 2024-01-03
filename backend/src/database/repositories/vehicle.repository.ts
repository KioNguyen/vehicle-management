import { Inject, Service } from 'typedi';
import { Repository } from 'typeorm';
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

  async getAllWithPagination(options: PaginationArgument): Promise<Pagination<Vehicle>> {
    const limit = +options.limit;
    const page = +options.page;
    const queryBuilder = await this._repository.createQueryBuilder('vehicle');
    return this.paginate(page, limit, queryBuilder);
  }
}
