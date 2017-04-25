#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../token");
var _1 = require("../../");
var digitalOcean = new _1.default(token_1.default);
var uid = process.argv[2];
var name = process.argv[3];
if (!uid)
    throw new Error('Invalid uid.');
if (!name)
    throw new Error('Invaluid name.');
digitalOcean
    .SSHKey
    .get(uid)
    .then(function (key) {
    console.log(key.name);
    key.setName(name)
        .then(function () { return console.log(key.name); })
        .catch(function (e) { return console.log(e.message); });
})
    .catch(function (e) { return console.log(e.message); });
