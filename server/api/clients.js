import { Router } from 'express';
import AddClient from '../models/clients.js';
import raExpressMongoose from 'express-mongoose-ra-json-server';

const router = Router();

router.use(
  '/',
  raExpressMongoose(AddClient)
);

export default router;