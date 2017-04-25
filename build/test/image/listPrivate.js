#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var page = parseInt(process.argv[2]);
var perPage = parseInt(process.argv[3]);
if (!page)
    page = 1;
if (!perPage)
    perPage = null;
_1.default.Image.listPrivate(page, perPage)
    .then(function (collection) { return console.log(collection); })
    .catch(function (e) { return console.log(e.message); });
