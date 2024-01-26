// Local storage keys
export const STORAGE_KEYS = {
  JWT_TOKEN_STUDENT: 'JWT_TOKEN_STUDENT',
  JWT_TOKEN_INSTRUCTOR: 'JWT_TOKEN_INSTRUCTOR',
  ADDRESS: 'ADDRESS',
  TOKEN: 'TOKEN',
  USER: 'USER'
};

// React-query keys
export const QUERY_KEYS = {
  TODOS: 'todos',
  PUBLIC: 'public',
  AUTH: 'auth'
};

// Backend Routes
export const BACKEND_KEYS = {
  SERVER_URL: 'http://127.0.0.1:4200',
  TODOS: {
    ROOT: 'todos',
    PUBLIC: 'todos/public',
    CREATE: 'todos/create',
    GETTODO: (todoId: number) => `todos/${todoId}`,
    UPDATE: (todoId: number) => `todos/update/${todoId}`,
    DELETE: (todoId: number) => `todos/delete/${todoId}`
  },
  AUTH: {
    REGISTER: 'user/register',
    LOGIN: 'user/login',
    RECOVER_PASS: 'user/recover-password',
    RECOVER_PASS_CONFIRMED: (userId: number, token: string) =>
      `user/recover-password/${userId}/${token}`,
    CHANGE_PASS: (userId: number) => `user/change-password/${userId}`
  }
};

export const ROUTER_KEYS = {
  HOME: '/',
  PUBLIC_TODOS: '/public',
  TODO: '/todos/:id',
  SIGN_UP: '/user/register',
  SIGN_IN: '/user/login',
  RECOVER_PASS: '/user/recover-password',
  RECOVER_PASS_CONFIRM: '/reset/:id/:token',
  CHANGE_PASSWORD: '/user/change-password'
};
