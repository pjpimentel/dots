#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var uid = parseInt(process.argv[2]);
if (!uid)
    throw new Error('Invalid uid.');
_1.default
    .Image
    .get(uid)
    .then(function (image) {
    image.delete()
        .then(function () { return console.log('deleted!'); })
        .catch(function (e) { return console.log(e.message); });
})
    .catch(function (e) { return console.log(e.message); });
