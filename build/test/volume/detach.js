#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../token");
var _1 = require("../../");
var digitalOcean = new _1.default(token_1.default);
var volumeId = process.argv[2];
var dropletId = parseInt(process.argv[3]);
var region = process.argv[4];
if (!volumeId)
    throw new Error('Invalid volume id.');
if (!dropletId)
    throw new Error('Invalid droplet id.');
digitalOcean
    .Volume
    .detach(volumeId, dropletId, region)
    .then(function (action) { return console.log(action); })
    .catch(function (e) { return console.log(e.message); });
