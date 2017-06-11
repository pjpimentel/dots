#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../token");
var _1 = require("../../");
var digitalOcean = new _1.default(token_1.default);
var name = process.argv[2];
var size = process.argv[3];
var region = process.argv[4];
var image = process.argv[5];
if (!name)
    throw new Error('Invalid name.');
if (!size)
    throw new Error('Invalid size.');
if (!region)
    throw new Error('Invalid region.');
if (!image)
    throw new Error('Invalid image.');
digitalOcean
    .Droplet
    .create({
    name: name,
    size: size,
    region: region,
    image: image
})
    .then(function (droplet) { return console.log(droplet); })
    .catch(function (e) { return console.log(e.message); });
