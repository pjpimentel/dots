#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var id = parseInt(process.argv[2]);
if (!id)
    throw new Error('Invalid id.');
_1.default
    .Droplet
    .get(id)
    .then(function (droplet) { return console.log(droplet); })
    .catch(function (e) { return console.log(e.message); });
