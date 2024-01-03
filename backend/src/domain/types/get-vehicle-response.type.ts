import { ObjectType } from 'type-graphql';
import { Vehicle } from './../../database/entities/vehicle';
import { PaginatedResponse } from './pagination-response.type';

@ObjectType()
export class GetVehiclesResponse extends PaginatedResponse(Vehicle) {}
