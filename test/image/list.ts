#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let page = parseInt(process.argv[2]);
let perPage = parseInt(process.argv[3]);
let resourceType = process.argv[4];

if(!page) page = 1;
if(!perPage) perPage = null;

let promise;
if(resourceType)
    promise = digitalOcean.Image.list(resourceType, page, perPage);
else
    promise = digitalOcean.Image.list(page, perPage);

promise
    .then(collection => console.log(collection))
    .catch(e => console.log(e.message));
