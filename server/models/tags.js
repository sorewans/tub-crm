import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const tagEntrySchema = new Schema({
  name: String
},
{
  timestamps: true,
});

const AddTag = model('tags', tagEntrySchema);

export default AddTag;