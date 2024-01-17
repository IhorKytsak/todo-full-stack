/* eslint-disable no-console */

import { createConnection, DataSourceOptions } from 'typeorm';

const connectDB = async () => {
  try {
    const options: DataSourceOptions = {
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      logging: ['query', 'error'],
      type: 'postgres',
      entities: ['dist/**/*.entity.{ts,js}'],
      migrations: ['dist/migrations/**/*.{ts,js}'],
      subscribers: ['src/subscriber/**/*.ts'],
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      synchronize: true
    };
    await createConnection(options);
    console.log('MongoDB Connected...');
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);

      process.exit(1);
    }
  }
};

export default connectDB;
