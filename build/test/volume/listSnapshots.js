#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../token");
var _1 = require("../../");
var digitalOcean = new _1.default(token_1.default);
var id = process.argv[2];
var page = parseInt(process.argv[3]);
var perPage = parseInt(process.argv[4]);
if (!id)
    throw new Error('Invalid id.');
if (!page)
    page = 1;
if (!perPage)
    perPage = null;
digitalOcean
    .Volume
    .listSnapshots(id, page, perPage)
    .then(function (collection) { return console.log(collection); })
    .catch(function (e) { return console.log(e.message); });
