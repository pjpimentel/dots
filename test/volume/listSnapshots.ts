#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let success = data => console.log(data);
let error = error => console.log(error.message);
let id = process.argv[2];
let page = parseInt(process.argv[3]);
let perPage = parseInt(process.argv[4]);

if (!id) throw new Error('Invalid id.');
if (!page) page = 1;
if (!perPage) perPage = null;

digitalOcean.Volume.listSnapshots(id, page, perPage).first().subscribe(success, error);