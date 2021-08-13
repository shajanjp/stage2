import Contacts from '../models/contacts';

class ContactsCtrl {
  private model = Contacts;

  upsert = async (req, res) => {
    try {
      let obj;

      // upsert contact to db
      // update cache

      res.status(201).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  get = async (req, res) => {
    // find from cache
    // or
    // find from db
    // add to cache
  }
}

export default ContactsCtrl;
