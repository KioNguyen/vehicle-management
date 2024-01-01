import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "../../libs/database";

export const typeormConfig: DataSourceOptions = {
  namingStrategy: new SnakeNamingStrategy(),
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: ["warn"],
  entities: [],
  migrations: [],
  subscribers: [],
};

export const DBDataSource = new DataSource(typeormConfig);
