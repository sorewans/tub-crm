const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = {
  type: String,
  required: true,
};

const clientEntrySchema = new Schema({
  name: requiredString,
  tradeName: String,
  address: String,
  contact1: String,
  phone1: String,
  email1: String,
  contact2: String,
  phone2: String,
  email2: String,
  notes: String,
  gas: Boolean,
  electric: Boolean,
  water: Boolean,
  contracts: Array
},
{
  timestamps: true,
});

const AddClient = mongoose.model('clients', clientEntrySchema);

module.exports = AddClient;