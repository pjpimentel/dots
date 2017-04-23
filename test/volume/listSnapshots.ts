#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let id = process.argv[2];
let page = parseInt(process.argv[3]);
let perPage = parseInt(process.argv[4]);

if(!id) throw new Error('Invalid id.');
if(!page) page = 1;
if(!perPage) perPage = null;

digitalOcean
    .Volume
    .listSnapshots(id, page, perPage)
    .then(collection => console.log(collection))
    .catch(e => console.log(e.message));
