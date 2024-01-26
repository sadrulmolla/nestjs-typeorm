import { DataSource } from "typeorm";
import { getEntities } from "./entities-list";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRESQL_DB_HOST,
  port: +process.env.POSTGRESQL_DB_PORT,
  username: process.env.POSTGRESQL_DB_USERNAME,
  password: process.env.POSTGRESQL_DB_PASSWORD,
  database: process.env.POSTGRESQL_DB_NAME,
  entities: getEntities(),
  migrations: [`src/database/migrations/${process.env.NODE_ENV_DATA}/*.ts`],
});