#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../token");
var _1 = require("../../");
var digitalOcean = new _1.default(token_1.default);
var name = process.argv[2];
var publicKey = process.argv[3];
if (!name)
    throw new Error('Invalid name.');
if (!publicKey)
    throw new Error('Invalid publicKey.');
digitalOcean
    .SSHKey
    .create({ name: name, public_key: publicKey })
    .then(function (key) { return console.log(key); })
    .catch(function (e) { return console.log(e.message); });
