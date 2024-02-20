import { Field, ObjectType, type ClassType } from 'type-graphql';

export function PaginatedResponse<TItemsFieldValue extends object>(itemsFieldValue: ClassType<TItemsFieldValue> | string | number | boolean) {
  @ObjectType()
  class Pagination {
    @Field()
    total: number;

    @Field()
    page: number;

    @Field()
    limit: number;

    @Field()
    totalPage: number;
  }

  @ObjectType()
  abstract class PaginatedResponseClass {
    @Field(() => [itemsFieldValue])
    items!: TItemsFieldValue[];

    @Field(() => Pagination)
    pagination: Pagination;
  }

  return PaginatedResponseClass;
}
