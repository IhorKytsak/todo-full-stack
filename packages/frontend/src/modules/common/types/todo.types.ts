export interface ITodo {
  id?: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isPrivate: boolean;
}

export interface ITodoUpdate {
  id: number;
  title?: string;
  description?: string;
  isCompleted?: boolean;
  isPrivate?: boolean;
}

export interface ITodoFilters {
  search?: string;
  isCompleted?: boolean;
  isPrivate?: boolean;
}
