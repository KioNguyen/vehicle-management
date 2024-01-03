import { GetVehiclesFilterInput } from 'src/domain/dto/get-vehicles-filter-input.dto';
import { PaginationArgument } from 'src/domain/dto/pagination-argument.dto';
import { GetVehiclesResponse } from 'src/domain/types/get-vehicle-response.type';

export const IGetVehiclesUseCase = 'IGetVehiclesUseCase';

export interface IGetVehiclesUseCase {
  execute(data: { pagination: PaginationArgument; filter: GetVehiclesFilterInput }): Promise<GetVehiclesResponse>;
}
