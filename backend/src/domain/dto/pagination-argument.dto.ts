import * as jf from 'joiful';
import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class PaginationArgument {
  @Field(() => Int)
  // use decorators for Joi
  @jf.number().min(0)
  page = 0;

  @Field(() => Int)
  // use decorators for Joi
  @jf.number().min(1).max(100)
  limit = 10;
}
