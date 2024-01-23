// Local storage keys
export const STORAGE_KEYS = {
  JWT_TOKEN_STUDENT: 'JWT_TOKEN_STUDENT',
  JWT_TOKEN_INSTRUCTOR: 'JWT_TOKEN_INSTRUCTOR',
  ADDRESS: 'ADDRESS',
  TOKEN: 'TOKEN'
};

// React-query keys
export const QUERY_KEYS = {
  TODOS: 'todos',
  AUTH: 'auth'
};

// Backend Routes
export const BACKEND_KEYS = {
  SERVER_URL: 'http://127.0.0.1:4200',
  TODOS: {
    ROOT: 'todos',
    CREATE: 'todos/create',
    GETTODO: (todoId: number) => `todos/${todoId}`,
    UPDATE: (todoId: number) => `todos/update/${todoId}`,
    DELETE: (todoId: number) => `todos/delete/${todoId}`
  },
  AUTH: {
    REGISRER: 'user/register',
    LOGIN: 'user/login',
    RECOVER_PASS: 'user/recover-password',
    CHANGE_PASS: (userId: number) => `user/change-password/${userId}`
    // LOGOUT: 'user/login',
    // USER: 'user'
  }
};

export const ROUTER_KEYS = {
  ROOT: '/',
  TODO: 'todos/:id'
};
