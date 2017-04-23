#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let page = parseInt(process.argv[2]);
let perPage = parseInt(process.argv[3]);

if(!page) page = 1;
if(!perPage) perPage = null;

digitalOcean.Image.listPrivate(page, perPage)
    .then(collection => console.log(collection))
    .catch(e => console.log(e.message));
