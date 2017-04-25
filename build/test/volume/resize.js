#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../token");
var _1 = require("../../");
var digitalOcean = new _1.default(token_1.default);
var id = process.argv[2];
var newSize = parseInt(process.argv[3]);
if (!id)
    throw new Error('Invalid id.');
if (!newSize)
    throw new Error('Invalid size.');
digitalOcean
    .Volume
    .resize(id, newSize)
    .then(function (action) { return console.log(action); })
    .catch(function (e) { return console.log(e.message); });
