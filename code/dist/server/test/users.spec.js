"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const chaiHttp = require("chai-http");
const mocha_1 = require("mocha");
process.env.NODE_ENV = 'test';
const app_1 = require("../app");
const user_1 = require("../models/user");
chai.use(chaiHttp).should();
mocha_1.describe('Users', () => {
    beforeEach(done => {
        user_1.default.remove({}, err => {
            done();
        });
    });
    mocha_1.describe('Backend tests for users', () => {
        mocha_1.it('should get all the users', done => {
            chai.request(app_1.app)
                .get('/api/users')
                .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
        });
        mocha_1.it('should get users count', done => {
            chai.request(app_1.app)
                .get('/api/users/count')
                .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('number');
                res.body.should.be.eql(0);
                done();
            });
        });
        mocha_1.it('should create new user', done => {
            const user = new user_1.default({ username: 'Dave', email: 'dave@example.com', role: 'user' });
            chai.request(app_1.app)
                .post('/api/user')
                .send(user)
                .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.a.property('username');
                res.body.should.have.a.property('email');
                res.body.should.have.a.property('role');
                done();
            });
        });
        mocha_1.it('should get a user by its id', done => {
            const user = new user_1.default({ username: 'User', email: 'user@example.com', role: 'user' });
            user.save((error, newUser) => {
                chai.request(app_1.app)
                    .get(`/api/user/${newUser.id}`)
                    .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('username');
                    res.body.should.have.property('email');
                    res.body.should.have.property('role');
                    res.body.should.have.property('_id').eql(newUser.id);
                    done();
                });
            });
        });
        mocha_1.it('should update a user by its id', done => {
            const user = new user_1.default({ username: 'User', email: 'user@example.com', role: 'user' });
            user.save((error, newUser) => {
                chai.request(app_1.app)
                    .put(`/api/user/${newUser.id}`)
                    .send({ username: 'User 2' })
                    .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
            });
        });
        mocha_1.it('should delete a user by its id', done => {
            const user = new user_1.default({ username: 'User', email: 'user@example.com', role: 'user' });
            user.save((error, newUser) => {
                chai.request(app_1.app)
                    .del(`/api/user/${newUser.id}`)
                    .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=users.spec.js.map