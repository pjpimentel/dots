#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../token");
var _1 = require("../../");
var digitalOcean = new _1.default(token_1.default);
var page = parseInt(process.argv[2]);
var perPage = parseInt(process.argv[3]);
if (!page)
    page = 1;
if (!perPage)
    perPage = null;
digitalOcean
    .Tag
    .list(page, perPage)
    .then(function (collection) { return console.log(collection); })
    .catch(function (e) { return console.log(e.message); });
