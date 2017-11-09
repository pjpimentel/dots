#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let success = data => console.log(data);
let error = error => console.log(error.message);
let page = parseInt(process.argv[2]);
let perPage = parseInt(process.argv[3]);

if (!page) page = 1;
if (!perPage) perPage = null;

digitalOcean.Volume.list(page, perPage).first().subscribe(success, error);