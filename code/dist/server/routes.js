"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const contacts_1 = require("./controllers/contacts");
function setRoutes(app) {
    const router = express.Router();
    const contactsCtrl = new contacts_1.default();
    // Contacts
    router.route('/contacts/:id').get(contactsCtrl.get);
    router.route('/contacts').post(contactsCtrl.upsert);
    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map