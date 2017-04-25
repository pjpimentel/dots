#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var id = parseInt(process.argv[2]);
var page = parseInt(process.argv[3]);
var perPage = parseInt(process.argv[4]);
if (!id)
    throw new Error('invalid id.');
if (!page)
    page = 1;
if (!perPage)
    perPage = null;
_1.default.Image.listActions(id, page, perPage)
    .then(function (collection) { return console.log(collection); })
    .catch(function (e) { return console.log(e.message); });
