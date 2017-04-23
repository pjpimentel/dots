#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let id = parseInt(process.argv[2]);
let page = parseInt(process.argv[3]);
let perPage = parseInt(process.argv[4]);

if(!id) throw new Error('invalid id.');
if(!page) page = 1;
if(!perPage) perPage = null;

digitalOcean.Image.listActions(id, page, perPage)
    .then(collection => console.log(collection))
    .catch(e => console.log(e.message));
