#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var id = parseInt(process.argv[2]);
var name = process.argv[3];
if (!id)
    throw new Error('Invalid id.');
if (!name)
    throw new Error('Invalid name.');
_1.default
    .Droplet
    .createSnapshot(id, name)
    .then(function (action) { return console.log(action); })
    .catch(function (e) { return console.log(e.message); });
