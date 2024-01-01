import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { BodyType, Brand, FuelType } from "../../constant/vehicel";

@Entity("vehicles")
export class Vehicle {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ type: "enum", enum: Brand })
  brand: Brand;

  @Column({ nullable: true })
  description: string;

  @Column({ type: "enum", enum: BodyType })
  bodyType: BodyType;

  @Column({ type: "enum", enum: FuelType })
  fuelType: FuelType;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
  price: number;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: "timestamp", default: null, nullable: true })
  deletedAt: Date;
}
