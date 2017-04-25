#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var page = parseInt(process.argv[2]);
var perPage = parseInt(process.argv[3]);
var resourceType = process.argv[4];
if (!page)
    page = 1;
if (!perPage)
    perPage = null;
var promise;
if (resourceType)
    promise = _1.default.Image.list(resourceType, page, perPage);
else
    promise = _1.default.Image.list(page, perPage);
promise
    .then(function (collection) { return console.log(collection); })
    .catch(function (e) { return console.log(e.message); });
