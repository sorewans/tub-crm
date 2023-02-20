import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const clientEntrySchema = new Schema({
  name: String,
  website: String,
  contact1: String,
  phone1: String,
  email1: String,
  position1: String,
  otherContacts: Array,
  tradeName: String,
  address1: String,
  contractTypes: Array,
  additionalPremises: Array,
  notes: String
},
{
  timestamps: true,
});

const AddClient = model('clients', clientEntrySchema);

export default AddClient;