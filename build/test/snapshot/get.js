#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../token");
var _1 = require("../../");
var digitalOcean = new _1.default(token_1.default);
var id = process.argv[2];
if (!id)
    throw new Error('Invalid id.');
digitalOcean
    .Snapshot
    .get(id)
    .then(function (snapshot) { return console.log(snapshot); })
    .catch(function (e) { return console.log(e.message); });
