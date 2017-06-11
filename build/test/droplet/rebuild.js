#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var id = parseInt(process.argv[2]);
var image = process.argv[3];
if (!id)
    throw new Error('Invalid id.');
if (!image)
    throw new Error('Invalid image.');
_1.default
    .Droplet
    .rebuild(id, image)
    .then(function (action) { return console.log(action); })
    .catch(function (e) { return console.log(e.message); });
