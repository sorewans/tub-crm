import { Router } from 'express';
import AddUser from '../models/users.js'
import raExpressMongoose from 'express-mongoose-ra-json-server';

const router = Router();

router.use(
  '/',
  raExpressMongoose(AddUser)
);

export default router;