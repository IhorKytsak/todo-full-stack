import { FindOperator } from 'typeorm';

export interface ITodo {
  title: string;
  description: string;
  isCompleted: boolean;
  isPrivate: boolean;
}

export interface ITodoQuery {
  page?: string;
  pageSize?: string;
  search?: string;
  isCompleted?: 'true' | 'false';
  isPrivate?: 'true' | 'false';
}

export interface ITodoFilter {
  user: { id: number };
  title?: FindOperator<string>;
  isCompleted?: boolean;
  isPrivate?: boolean;
}
