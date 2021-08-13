"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const contacts_1 = require("../models/contacts");
class ContactsCtrl {
    constructor() {
        this.model = contacts_1.default;
        this.upsert = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                let obj;
                // upsert contact to db
                // update cache
                res.status(201).json(obj);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.get = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            // find from cache
            // or
            // find from db
            // add to cache
        });
    }
}
exports.default = ContactsCtrl;
//# sourceMappingURL=contacts.js.map