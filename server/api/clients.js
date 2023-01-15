const { Router } = require('express');
const AddClient = require('../models/clients');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const clients = await AddClient.find();
    res.json(clients);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  let id = req.params.id;
  try {
  const oneClient = await AddClient.findById(id)  ;
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
  const updateClient = await AddClient.findByIdAndUpdate( id, req.body );
  res.json(updateClient);
  } catch (error) {
    console.log(error.name);
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;