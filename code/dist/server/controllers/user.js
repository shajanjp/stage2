"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const user_1 = require("../models/user");
const base_1 = require("./base");
class UserCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = user_1.default;
        this.login = (req, res) => {
            this.model.findOne({ email: req.body.email }, (err, user) => {
                if (!user) {
                    return res.sendStatus(403);
                }
                user.comparePassword(req.body.password, (error, isMatch) => {
                    if (!isMatch) {
                        return res.sendStatus(403);
                    }
                    const token = jwt.sign({ user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
                    res.status(200).json({ token });
                });
            });
        };
    }
}
exports.default = UserCtrl;
//# sourceMappingURL=user.js.map