// src/data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(`${process.env.DB_PORT || 5432}`),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'pakistan1947',
  database: process.env.DB_NAME || 'ssm',
  // synchronize: true,
  ssl: { rejectUnauthorized: false },
  logging: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
});
