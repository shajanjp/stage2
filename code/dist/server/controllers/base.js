"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class BaseCtrl {
    constructor() {
        // Get all
        this.getAll = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({});
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        // Count all
        this.count = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const count = yield this.model.count();
                res.status(200).json(count);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        // Insert
        this.insert = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield new this.model(req.body).save();
                res.status(201).json(obj);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        // Get by id
        this.get = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.findOne({ _id: req.params.id });
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
        // Update by id
        this.update = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.model.findOneAndUpdate({ _id: req.params.id }, req.body);
                res.sendStatus(200);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        // Delete by id
        this.delete = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.model.findOneAndRemove({ _id: req.params.id });
                res.sendStatus(200);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
    }
}
exports.default = BaseCtrl;
//# sourceMappingURL=base.js.map