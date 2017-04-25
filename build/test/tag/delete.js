#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../token");
var _1 = require("../../");
var digitalOcean = new _1.default(token_1.default);
var name = process.argv[2];
if (!name)
    throw new Error('Invalid name.');
digitalOcean
    .Tag
    .get(name)
    .then(function (tag) {
    tag.delete()
        .then(function () { return console.log('deleted!'); })
        .catch(function (e) { return console.log(e.message); });
})
    .catch(function (e) { return console.log(e.message); });
