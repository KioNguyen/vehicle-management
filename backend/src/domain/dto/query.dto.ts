import { InputType } from 'type-graphql';

@InputType()
export class Query {
  select: string[];
  where: string;
  orderBy: string[];
  limit: number;
  before: string;
  after: string;
}
