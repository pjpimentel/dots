#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var uid = parseInt(process.argv[2]);
var regionSlug = process.argv[3];
if (!uid)
    throw new Error('Invalid id.');
if (!regionSlug)
    throw new Error('Invalid region slug.');
_1.default
    .Image
    .transfer(uid, regionSlug)
    .then(function (action) { return console.log(action); })
    .catch(function (e) { return console.log(e.message); });
