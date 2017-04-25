#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var id = parseInt(process.argv[2]);
var type = process.argv[3];
var page = parseInt(process.argv[4]);
var perPage = parseInt(process.argv[5]);
if (!id)
    throw new Error('Invalid id.');
if (!type)
    throw new Error('Invalid image type.');
if (!page)
    page = 1;
if (!perPage)
    perPage = null;
_1.default.Droplet
    .listImages(id, type, page, perPage)
    .then(function (collection) { return console.log(collection); })
    .catch(function (e) { return console.log(e.message); });
