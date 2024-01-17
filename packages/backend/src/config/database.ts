/* eslint-disable no-console */

import { DataSource, DataSourceOptions } from 'typeorm';
import { UserEntity } from '../entities/User.entity';
import { TodoEntity } from '../entities/Todo.entity';

const connectDB = async () => {
  try {
    const options: DataSourceOptions = {
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      logging: ['query', 'error'],
      type: 'postgres',
      entities: [UserEntity, TodoEntity],
      migrations: ['dist/migrations/**/*.{ts,js}'],
      subscribers: ['src/subscriber/**/*.ts'],
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      synchronize: true
    };

    const dataSource = new DataSource(options);
    await dataSource.initialize();
    console.log('PostgreSQL Connected...');
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);

      process.exit(1);
    }
  }
};

export default connectDB;
