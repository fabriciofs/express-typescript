import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import Router from './routes';
import dbConfig from './config/database';

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json',
    },
  }),
);

app.use(Router);

createConnection(dbConfig)
  .then(connection => {
    app.listen(PORT, () => {
      console.log('Server is running on port', PORT);
    });
  })
  .catch(err => {
    console.log('Unable to connect to db', err);
    process.exit(1);
  });
