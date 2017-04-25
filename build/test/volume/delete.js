#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../token");
var _1 = require("../../");
var digitalOcean = new _1.default(token_1.default);
var name = process.argv[2];
var region = process.argv[3];
if (!name)
    throw new Error('Invalid name.');
if (!region)
    region = undefined;
digitalOcean
    .Volume
    .delete(name, region)
    .then(function () { return console.log('deleted!'); })
    .catch(function (e) { return console.log(e.message); });
