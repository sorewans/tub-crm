const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('./middlewares');
const clients = require('./api/clients');
const connectDB = require('./config/db');

require('dotenv').config();
const app = express();

connectDB();

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

app.use('/clients', clients);

// Not found middleware
app.use(middlewares.notFound);

app.use(middlewares.errorHandler);

app.listen(3003, () => {
  console.log("Server is running on Port 3003")
});