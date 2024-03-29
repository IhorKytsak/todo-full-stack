# Todo App

### This is a full-stack todo app built with React, Node.js, Express and PostgreSQL. 
#### It includes user authentication,user password reset/change error handling, responsive design, pagination, filtering and more.

## Site Preview

### Public View
![Public view](https://github.com/IhorKytsak/todo-full-stack/blob/ikytsak/main/site-view/public%20view.gif)

### User View
![User View](https://github.com/IhorKytsak/todo-full-stack/blob/ikytsak/main/site-view/user%20view.gif)

### Todo CRUD Operations
![Todo CRUD Operations](https://github.com/IhorKytsak/todo-full-stack/blob/ikytsak/main/site-view/CRUD%20todo.gif)

### Filter Todo
![Filter Todo](https://github.com/IhorKytsak/todo-full-stack/blob/ikytsak/main/site-view/filter%20todo.gif)

## Tech Stack

### Frontend

- React
- TypeScript
- Material UI
- React Query
- Formik
- Yup
- Styled Components
- React Router DOM
- Axios
- React Toastify
- Swiper

### Backend

- Node.js
- Express
- TypeScript
- PostgreSQL
- TypeORM
- Bcryptjs
- Validation with Joi
- Passport

## Key Features

- User registration and login
- Password reset via email
- JWT authentication
- Protected routes and endpoints
- Responsive design using Material UI
- Pagination and infinite scrolling for todo items
- Filtering and search for todo items
- Form validation with Yup
- Error handling with custom middleware
- Database modeling with TypeORM
- Project structure following best practices

## Project Structure

```
   ├── frontend 
   │ ├── public
   │ ├── src
   │ │ ├── components
   │ │ ├── contexts
   │ │ ├── hooks
   │ │ ├── pages
   │ │ ├── services
   │ │ ├── styles
   │ │ ├── types
   │ │ ├── utils
   │ │ ├── App.tsx
   │ │ └── index.tsx
   │ ├── package.json
   │ ├── tsconfig.json
   │ └── ...
   ├── backend
   │ ├── src
   │ │ ├── config
   │ │ ├── controllers
   │ │ ├── middlewares
   │ │ ├── models
   │ │ ├── routes
   │ │ ├── services
   │ │ ├── utils
   │ │ └── server.ts
   │ ├── package.json
   │ ├── tsconfig.json
   │ └── ...
   ├── lerna.json
   ├── package.json
   ├── tsconfig.json
   └── ...
```

