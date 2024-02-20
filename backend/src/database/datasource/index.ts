import dotenv from 'dotenv';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from '../../libs/database';

dotenv.config({ path: '.env' });
export const typeormConfig: DataSourceOptions = {
  entities: [__dirname + '/../entities/*{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  namingStrategy: new SnakeNamingStrategy(),
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: ['warn']
};

export const DBDataSource = new DataSource(typeormConfig);
