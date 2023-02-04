import { Router } from 'express';
import AddClient from '../models/clients.js';
import raExpressMongoose from 'express-mongoose-ra-json-server';

const router = Router();

router.use(
  '/',
  raExpressMongoose(AddClient)
);

// router.get('/clients', async (req, res) => {
//   //the variable total holds the value we want to pass in the header     
//   res.set({ 
//           'X-Total-Count': total,
//           'Access-Control-Expose-Headers':'X-Total-Count'
//   });
//   const clients = await find();
//   res.json(clients);
// })

// router.get('/', async (req, res, next) => {
//   try {
//     const clients = await find();
//     res.json(clients);
//   } catch (error) {
//     next(error);
//   }
// });

router.get('/:id', async (req, res, next) => {
  let id = req.params.id;
  try {
  const oneClient = await findById(id)  ;
  res.json(oneClient);
  } catch (error) {
    next(error);
  }
})

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body)
    const addClient = new AddClient(req.body);
    const createdClient = await addClient.save();
    res.json(createdClient);
  } catch (error) {
    console.log(error.name);
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
  console.log(req.params.id);
  let id = req.params.id;
  console.log(req.body);
  const updateClient = await findByIdAndUpdate( id, req.body );
  res.json(updateClient);
  } catch (error) {
    console.log(error.name);
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

export default router;