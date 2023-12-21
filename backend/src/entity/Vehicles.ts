import { Entity, Unique, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { VehicleBodyEnumType, VehicleFuelEnumType, VehicleMakeEnum } from "../interface/vehicle";
import { BeforeInsert, BeforeUpdate } from "typeorm";

@Entity("vehicles")
export class Vehicle {
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

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updatedAt: Date;

    @DeleteDateColumn({ type: "timestamp", default: null, nullable: true })
    deletedAt: Date;
}