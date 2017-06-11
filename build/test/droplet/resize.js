#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var id = parseInt(process.argv[2]);
var slug = process.argv[3];
var resizeDisk = process.argv[4] ? true : false;
if (!id)
    throw new Error('Invalid id.');
if (!slug)
    throw new Error('Invalid slug.');
_1.default
    .Droplet
    .resize(id, slug, resizeDisk)
    .then(function (action) { return console.log(action); })
    .catch(function (e) { return console.log(e.message); });
