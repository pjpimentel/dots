#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var id = parseInt(process.argv[2]);
var kernel = parseInt(process.argv[3]);
if (!id)
    throw new Error('Invalid id.');
if (!kernel)
    throw new Error('Invalid kernel.');
_1.default
    .Droplet
    .changeKernel(id, kernel)
    .then(function (action) { return console.log(action); })
    .catch(function (e) { return console.log(e.message); });
