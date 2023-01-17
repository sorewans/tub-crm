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
  website: String,
  contact1: String,
  position1: String,
  phone1: String,
  email1: String,
  contact2: String,
  position2: String,
  phone2: String,
  email2: String,
  notes: String,
  gas: Boolean,
  electric: Boolean,
  water: Boolean,
  dbcomm: Boolean,
  contracts: Array
},
{
  timestamps: true,
});

const AddClient = mongoose.model('clients', clientEntrySchema);

module.exports = AddClient;