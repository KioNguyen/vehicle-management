import { MigrationInterface, QueryRunner } from "typeorm";

export class Packing1704265713163 implements MigrationInterface {
    name = 'Packing1704265713163'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TYPE "public"."vehicles_brand_enum" AS ENUM(
                'Mercedes_Benz',
                'BMW',
                'Volkswagen',
                'Audi',
                'Honda',
                'Toyota'
            )
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."vehicles_body_type_enum" AS ENUM(
                'SUV',
                'Sedan',
                'Hatchback',
                'Coupe',
                'Convertible'
            )
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."vehicles_fuel_type_enum" AS ENUM('Petrol', 'Diesel', 'Hybrid', 'Electric')
        `);
        await queryRunner.query(`
            CREATE TABLE "vehicles" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "brand" "public"."vehicles_brand_enum" NOT NULL,
                "description" character varying,
                "body_type" "public"."vehicles_body_type_enum" NOT NULL,
                "fuel_type" "public"."vehicles_fuel_type_enum" NOT NULL,
                "price" numeric(10, 2),
                "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone,
                "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone,
                "deleted_at" TIMESTAMP,
                CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "vehicles"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."vehicles_fuel_type_enum"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."vehicles_body_type_enum"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."vehicles_brand_enum"
        `);
    }

}
