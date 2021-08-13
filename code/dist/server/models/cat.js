"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const catSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    age: Number
});
const Cat = mongoose.model('Cat', catSchema);
exports.default = Cat;
//# sourceMappingURL=cat.js.map