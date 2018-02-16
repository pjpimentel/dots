#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

const success = data => console.log(data);
const error = error => console.log(error.message);
const page = parseInt(process.argv[2]) || 1;
const perPage = parseInt(process.argv[3]) || null
const resourceType = process.argv[4];

let observable = digitalOcean.Image.list(page, perPage);
if (resourceType)
    digitalOcean.Image.list(resourceType, page, perPage);

observable.subscribe(success, error);