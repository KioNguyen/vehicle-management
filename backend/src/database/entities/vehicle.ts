import { Field, ObjectType } from 'type-graphql';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { BodyType, Brand, FuelType } from '../../constant/vehicle';

@Entity('vehicles')
@ObjectType()
export class Vehicle {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => Brand)
  @Column({ type: 'enum', enum: Brand })
  brand: Brand;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field(() => BodyType)
  @Column({ type: 'enum', enum: BodyType })
  bodyType: BodyType;

  @Field(() => FuelType)
  @Column({ type: 'enum', enum: FuelType })
  fuelType: FuelType;

  @Field()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  price: number;

  @Field()
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)'
  })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)'
  })
  updatedAt: Date;

  @Field({ nullable: true })
  @DeleteDateColumn({ type: 'timestamp', default: null, nullable: true })
  deletedAt: Date;
}
