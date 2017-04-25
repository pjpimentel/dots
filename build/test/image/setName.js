#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var uid = process.argv[2];
var name = process.argv[3];
if (!uid)
    throw new Error('Invalid uid.');
if (!name)
    throw new Error('Invaluid name.');
_1.default
    .Image
    .get(uid)
    .then(function (image) {
    console.log(image.name);
    image.setName(name)
        .then(function () { return console.log(image.name); })
        .catch(function (e) { return console.log(e.message); });
})
    .catch(function (e) { return console.log(e.message); });
