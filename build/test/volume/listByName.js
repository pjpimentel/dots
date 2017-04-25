#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../token");
var _1 = require("../../");
var digitalOcean = new _1.default(token_1.default);
var name = process.argv[2];
var region = process.argv[3];
var page = parseInt(process.argv[4]);
var perPage = parseInt(process.argv[5]);
if (!name)
    throw new Error('Invalid name.');
if (!region)
    throw new Error('Invalid region.');
if (!page)
    page = 1;
if (!perPage)
    perPage = null;
digitalOcean
    .Volume
    .listByName(name, region, page, perPage)
    .then(function (collection) { return console.log(collection); })
    .catch(function (e) { return console.log(e.message); });
