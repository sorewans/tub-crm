import { Router } from 'express';
import AddContact from '../models/contacts.js';
import raExpressMongoose from 'express-mongoose-ra-json-server';

const router = Router();

router.use(
  '/',
  raExpressMongoose(AddContact)
);

export default router;