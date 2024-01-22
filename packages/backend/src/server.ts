import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import AppRouter from './routes';
import connectDB from './config/database';
import { errorHandler } from './utils/error-handler.util';

const app = express();
const router = new AppRouter(app);

connectDB();

// Express configuration
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: [
      'Content-Type',
      'Content-Length',
      'Connection',
      'Authorization',
      'Access-Control-Allow-Origin',
      'Access-Control-Allow-Methods',
      'Access-Control-Allow-Headers',
      'Cache-Control',
      'RateLimit-Limit',
      'RateLimit-Remaining',
      'RateLimit-Reset',
      'Retry-After',
      'ETag',
      'Date',
      'Keep-Alive'
    ]
  })
);
app.set('port', process.env.PORT || 4200);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(errorHandler);

router.init();

const port = app.get('port');
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;
