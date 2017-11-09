#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let success = data => console.log(data);
let error = error => console.log(error.message);
let name = process.argv[2];
let region = process.argv[3];
let page = parseInt(process.argv[4]);
let perPage = parseInt(process.argv[5]);

if (!name) throw new Error('Invalid name.');
if (!region) throw new Error('Invalid region.');
if (!page) page = 1;
if (!perPage) perPage = null;

digitalOcean.Volume.listByName(name, region, page, perPage).first().subscribe(success, error);