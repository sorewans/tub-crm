import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const userEntrySchema = new Schema({
  name: String,
  email: String,
  password: String,
},
{
  timestamps: true,
});

const AddUser = model('users', userEntrySchema);

export default AddUser;