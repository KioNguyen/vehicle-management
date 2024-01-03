import { Field, InputType } from 'type-graphql';
import { BodyType, Brand, FuelType } from '../../constant/vehicle';

@InputType()
export class CreateVehicleInput {
  @Field()
  name: string;

  @Field(() => Brand)
  brand: Brand;

  @Field({ nullable: true })
  description?: string;

  @Field(() => BodyType)
  bodyType: BodyType;

  @Field(() => FuelType)
  fuelType: FuelType;

  @Field()
  price: number;
}
