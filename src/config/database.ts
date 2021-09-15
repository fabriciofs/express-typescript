import { ConnectionOptions } from 'typeorm';
import { User, Post, Comment } from '../models';

const config: ConnectionOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [User, Post, Comment],
  logging: true,
  synchronize: true,
};

export default config;
