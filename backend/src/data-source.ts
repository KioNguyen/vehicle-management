import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test", // Replace with your credentials
  password: "test", // Replace with your credentials
  database: "test", // Replace with your credentials
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});
