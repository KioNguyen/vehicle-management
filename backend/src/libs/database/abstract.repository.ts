import {
  DeepPartial,
  InsertResult,
  ObjectID,
  ObjectLiteral,
  Repository,
  SelectQueryBuilder,
  UpdateResult,
} from 'typeorm';
import _ from 'lodash';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

export interface IRepository<Entity extends ObjectLiteral> {
  findOne(options: DeepPartial<any>): Promise<Entity | null>;

  findById(id: string): Promise<Entity | null>;

  findMany(): Promise<Array<Entity>>;

  create(doc: DeepPartial<Entity>): Promise<Entity | null>;

  updateById(id: string, doc: DeepPartial<Entity>): Promise<any | null>;

  deleteById(id: string): Promise<any | null>;

  findTheLastItem(builder: string, fieldName: string): Promise<Entity | null>;

  insertAll(doc: DeepPartial<Entity>[]): Promise<InsertResult>;

  updateMany(
    where: string | number | Date | ObjectID | DeepPartial<Entity>,
    set: DeepPartial<Entity>,
  ): Promise<UpdateResult>;
}

export class AbstractRepository<Entity extends ObjectLiteral>
  implements IRepository<Entity>
{
  protected readonly _repository: Repository<Entity>;

  constructor(baseRepository: Repository<Entity>) {
    this._repository = baseRepository;
  }

  async findOne(
    options: DeepPartial<any>,
    relationsOptions?: string[],
  ): Promise<Entity | null> {
    return await this._repository.findOne({
      where: options,
      relations: relationsOptions,
    });
  }

  async findById(id: any): Promise<Entity | null> {
    return await this._repository.findOneBy({ id });
  }

  async findTheLastItem(
    builder: string,
    fieldName: string,
  ): Promise<Entity | null> {
    return this._repository
      .createQueryBuilder(builder)
      .orderBy(fieldName, 'DESC')
      .getOne();
  }

  async findTheLastItemWithDeleted(
    builder: string,
    fieldName: string,
  ): Promise<Entity | null> {
    return this._repository
      .createQueryBuilder(builder)
      .withDeleted()
      .orderBy(fieldName, 'DESC')
      .getOne();
  }

  async findMany(selects?: string[]): Promise<Entity[]> {
    return await this._repository.find({ select: selects });
  }

  async findManyWithPagination(
    options: IPaginationOptions,
  ): Promise<Pagination<Entity>> {
    return paginate<Entity>(this._repository, options);
  }

  async create(doc: DeepPartial<Entity>): Promise<Entity> {
    return await this._repository.create(doc).save();
  }

  async save(docs: any): Promise<Entity> {
    return await this._repository.save(docs);
  }

  async updateMany(
    where: string | number | Date | ObjectID | DeepPartial<Entity>,
    set: DeepPartial<Entity>,
  ): Promise<UpdateResult> {
    return await this._repository.update(where, set);
  }

  async insertAll(doc: DeepPartial<Entity>[]): Promise<InsertResult> {
    const entity = doc.map((item) => this._repository.create(item));
    return await this._repository.insert(entity);
  }

  async updateById(id: string, doc: DeepPartial<Entity>): Promise<any> {
    const foundInstance = await this.findById(id);
    _.keys(doc).forEach((key) => {
      _.set(foundInstance, key, doc[key]);
    });

    return await foundInstance.save();
  }

  async deleteById(id: string): Promise<any> {
    const foundInstance = await this.findById(id);
    await this._repository.remove(foundInstance);
    return {
      message: `Instance with id ${id} has been deleted`,
    };
  }

  async paginate(
    page = 1,
    limit = 10,
    queryBuilder?: SelectQueryBuilder<Entity>,
  ): Promise<Pagination<Entity>> {
    const [results, totalItems] = queryBuilder
      ? await queryBuilder
          .skip((page - 1) * limit)
          .take(limit)
          .getManyAndCount()
      : await this._repository.findAndCount({
          take: limit,
          skip: limit * (page - 1),
        });

    return {
      meta: {
        totalItems: totalItems,
        totalPages: Math.ceil(totalItems / limit),
        itemsPerPage: limit,
        currentPage: page,
        itemCount: 0,
      },
      items: results,
    };
  }
}
