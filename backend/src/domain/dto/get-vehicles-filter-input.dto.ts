import { Field, InputType } from 'type-graphql';
import { BodyType, Brand, FuelType } from '../../constant/vehicle';

@InputType()
export class GetVehiclesFilterInput {
  @Field({ nullable: true })
  name: string;

  @Field(() => Brand, { nullable: true })
  brand: Brand;

  @Field({ nullable: true })
  description?: string;

  @Field(() => BodyType, { nullable: true })
  bodyType: BodyType;

  @Field(() => FuelType, { nullable: true })
  fuelType: FuelType;

  @Field({ nullable: true })
  price: number;
}
