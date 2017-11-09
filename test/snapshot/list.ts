#!/usr/bin/env node
import digitalOcean from '../';

let success = data => console.log(data);
let error = error => console.log(error.message);
let page = parseInt(process.argv[2]);
let perPage = parseInt(process.argv[3]);
let resourceType = process.argv[4];

if (!page) page = 1;
if (!perPage) perPage = null;

let observable = digitalOcean.Snapshot.list(page, perPage);
if (resourceType) observable = digitalOcean.Snapshot.list(resourceType, page, perPage);

observable.first().subscribe(success, error);