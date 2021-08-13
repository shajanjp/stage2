import * as express from 'express';

import ContactsCtrl from './controllers/contacts';

function setRoutes(app): void {
  const router = express.Router();
  const contactsCtrl = new ContactsCtrl();

  // Contacts
  router.route('/contacts/:id').get(contactsCtrl.get);
  router.route('/contacts').post(contactsCtrl.upsert);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}

export default setRoutes;
