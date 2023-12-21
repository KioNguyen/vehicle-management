import "reflect-metadata";
import './config';
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
   type: "postgres",
   host: process.env.DB_HOST || "localhost",
   port: 5432,
   username: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   synchronize: true,
   logging: false,
   entities: [
      "src/entity/**/*.{ts,js}"
   ],
   migrations: [
      "src/migration/**/*.{ts,js}"
   ],
   subscribers: [
      "src/subscriber/**/*.{ts,js}"
   ]
});