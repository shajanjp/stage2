import * as mongoose from 'mongoose';

const contactsSchema = new mongoose.Schema({
  name: String,
  mobile: Number,
  _id: String
}, { timestamps: true });

const Contacts = mongoose.model('Contacts', contactsSchema);

export default Contacts;
