import { Router } from 'express';
import AddTag from '../models/tags.js'
import raExpressMongoose from 'express-mongoose-ra-json-server';

const router = Router();

router.use(
  '/',
  raExpressMongoose(AddTag)
);

export default router;