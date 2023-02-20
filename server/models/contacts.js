import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const contactEntrySchema = new Schema({
  name: String,
  phone: String,
  email: String,
  position: String,
},
{
  timestamps: true,
});

const AddContact = model('contacts', contactEntrySchema);

export default AddContact;