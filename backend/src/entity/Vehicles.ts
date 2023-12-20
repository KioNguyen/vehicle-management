import { Entity, Unique, PrimaryGeneratedColumn, Column } from "typeorm";
import { VehicleBodyEnumType, VehicleFuelEnumType, VehicleMakeEnum } from "../interface/vechicle";

@Entity("vechicles")
export class Vechicle {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    name: string;

    @Column({ type: 'enum', enum: VehicleMakeEnum, })
    brand: VehicleMakeEnum;

    @Column({ unique: true, nullable: true })
    description: string;

    @Column({ type: 'enum', enum: VehicleBodyEnumType })
    bodyType: VehicleBodyEnumType;

    @Column({ type: 'enum', enum: VehicleFuelEnumType })
    fuelType: VehicleFuelEnumType;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    price: number;
}