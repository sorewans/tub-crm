import express, { json } from 'express';
import connectDB from './config/db.js';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import middlewares from './middlewares.js';
import clients from './api/clients.js';
import users from './api/users.js';
import tags from './api/tags.js';
import contacts from './api/contacts.js';


import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

connectDB();

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
},));
app.use(json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Expose-Headers", "X-Total-Count, Content-Range");
  next();
});

app.use('/clients', clients);
app.use('/users', users);
app.use('/tags', tags);
app.use('/contacts', contacts);

// Not found middleware
app.use(middlewares.notFound);

app.use(middlewares.errorHandler);

app.listen(5005, () => {
  console.log("Server is running on Port 5005")
});