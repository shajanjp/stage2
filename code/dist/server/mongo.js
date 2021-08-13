"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose = require("mongoose");
function setMongo() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let mongodbURI;
        if (process.env.NODE_ENV === 'test') {
            mongodbURI = process.env.MONGODB_TEST_URI;
        }
        else {
            mongodbURI = process.env.MONGODB_URI;
        }
        mongoose.Promise = global.Promise;
        mongoose.set('useCreateIndex', true);
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useUnifiedTopology', true);
        // Connect to MongoDB using Mongoose
        yield mongoose.connect(mongodbURI);
        console.log('Connected to MongoDB');
    });
}
exports.default = setMongo;
//# sourceMappingURL=mongo.js.map