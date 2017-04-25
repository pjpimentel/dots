#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let page = parseInt(process.argv[2]);
let perPage = parseInt(process.argv[3]);
let tag = process.argv[4];

if(!page) page = 1;
if(!perPage) perPage = null;

let promise;
if(tag)
    promise = digitalOcean.Droplet.list(tag, page, perPage);
else
    promise = digitalOcean.Droplet.list(page, perPage);
    

promise
    .then(collection => console.log(collection))
    .catch(e => console.log(e.message));
