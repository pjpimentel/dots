#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var uid = process.argv[2];
if (!uid)
    throw new Error('Invalid uid.');
_1.default
    .Image
    .get(uid)
    .then(function (image) { return console.log(image); })
    .catch(function (e) { return console.log(e.message); });
