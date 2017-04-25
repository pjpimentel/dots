#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../token");
var _1 = require("../../");
var digitalOcean = new _1.default(token_1.default);
var uid = parseInt(process.argv[2]);
if (!uid)
    throw new Error('Invalid uid.');
digitalOcean
    .SSHKey
    .get(uid)
    .then(function (key) {
    key.delete()
        .then(function () { return console.log('deleted!'); })
        .catch(function (e) { return console.log(e.message); });
})
    .catch(function (e) { return console.log(e.message); });
