#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../token");
var _1 = require("../../");
var digitalOcean = new _1.default(token_1.default);
var volumeId = process.argv[2];
var actionId = parseInt(process.argv[3]);
if (!volumeId)
    throw new Error('Invalid volume id.');
if (!actionId)
    throw new Error('Invalid action id.');
//TODO: test
digitalOcean
    .Volume
    .getActionById(volumeId, actionId)
    .then(function (action) { return console.log(action); })
    .catch(function (e) { return console.log(e.message); });
