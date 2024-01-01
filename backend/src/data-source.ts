import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres", // Replace with your credentials
  password: "postgres", // Replace with your credentials
  database: "packing", // Replace with your credentials
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});
