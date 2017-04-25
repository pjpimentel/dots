#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("./token");
var _1 = require("../");
var digitalOcean = new _1.default(token_1.default);
exports.default = digitalOcean;
