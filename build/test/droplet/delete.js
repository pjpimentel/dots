#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../token");
var _1 = require("../../");
var digitalOcean = new _1.default(token_1.default);
var id = parseInt(process.argv[2]);
if (!id)
    throw new Error('Invalid id.');
digitalOcean
    .Droplet
    .delete(id)
    .then(function () { return console.log('deleted!'); })
    .catch(function (e) { return console.log(e.message); });