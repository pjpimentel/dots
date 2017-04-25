#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../token");
var _1 = require("../../");
var digitalOcean = new _1.default(token_1.default);
var name = process.argv[2];
var size = parseInt(process.argv[3]);
var region = process.argv[4];
var description = process.argv[5];
if (!name)
    throw new Error('Invalid name.');
if (!size)
    throw new Error('Invalid size.');
if (!region)
    throw new Error('Invalid region.');
if (!description)
    description = undefined;
digitalOcean
    .Volume
    .create({
    name: name,
    size_gigabytes: size,
    region: region,
    description: description
})
    .then(function (volume) { return console.log(volume); })
    .catch(function (e) { return console.log(e.message); });
