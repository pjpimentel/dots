#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var id = parseInt(process.argv[2]);
if (!id)
    throw new Error('Invalid id.');
_1.default
    .Droplet
    .enableIPv6(id)
    .then(function (action) { return console.log(action); })
    .catch(function (e) { return console.log(e.message); });
