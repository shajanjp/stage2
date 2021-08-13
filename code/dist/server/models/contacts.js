"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const contactsSchema = new mongoose.Schema({
    name: String,
    mobile: Number,
    _id: String
}, { timestamps: true });
const Contacts = mongoose.model('Contacts', contactsSchema);
exports.default = Contacts;
//# sourceMappingURL=contacts.js.map