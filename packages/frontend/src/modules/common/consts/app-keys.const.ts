// Local storage keys
export const STORAGE_KEYS = {
  JWT_TOKEN_STUDENT: 'JWT_TOKEN_STUDENT',
  JWT_TOKEN_INSTRUCTOR: 'JWT_TOKEN_INSTRUCTOR',
  ADDRESS: 'ADDRESS',
  TOKEN: 'TOKEN'
};

// React-query keys
export const QUERY_KEYS = {
  TODOS: 'todos'
};

// Backend Routes
export const BACKEND_KEYS = {
  SERVER_URL: 'http://127.0.0.1:4200',
  ROOT: 'todos',
  CREATE: 'todos/create',
  UPDATE: (todoId: number) => `todos/update/${todoId}`,
  DELETE: (todoId: number) => `todos/delete/${todoId}`
};

export const ROUTER_KEYS = {
  ROOT: '/',
  HOME: 'home',
  AUTHORIZED: 'authorized'
};
