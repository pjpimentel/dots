#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let name = process.argv[2];
let region = process.argv[3];
let page = parseInt(process.argv[4]);
let perPage = parseInt(process.argv[5]);

if(!name) throw new Error('Invalid name.');
if(!region) throw new Error('Invalid region.');
if(!page) page = 1;
if(!perPage) perPage = null;


digitalOcean
    .Volume
    .listByName(name, region, page, perPage)
    .then(collection => console.log(collection))
    .catch(e => console.log(e.message));
