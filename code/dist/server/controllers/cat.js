"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cat_1 = require("../models/cat");
const base_1 = require("./base");
class CatCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = cat_1.default;
    }
}
exports.default = CatCtrl;
//# sourceMappingURL=cat.js.map