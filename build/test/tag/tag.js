#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../token");
var _1 = require("../../");
var digitalOcean = new _1.default(token_1.default);
var name = process.argv[2];
var resource_id = process.argv[3];
var resource_type = process.argv[4];
if (!name)
    throw new Error('Invalid name.');
if (!resource_id)
    throw new Error('Invalid resource_id.');
if (!resource_type)
    throw new Error('Invalid resource_type.');
digitalOcean
    .Tag
    .tagResource(name, resource_id, resource_type)
    .then(function () { return console.log('tagged!'); })
    .catch(function (e) { return console.log(e.message); });
