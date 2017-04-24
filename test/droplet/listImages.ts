#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let id = parseInt(process.argv[2]);
let type = process.argv[3];
let page = parseInt(process.argv[4]);
let perPage = parseInt(process.argv[5]);

if (!id) throw new Error('Invalid id.');
if (!type) throw new Error('Invalid image type.');
if (!page) page = 1;
if (!perPage) perPage = null;

digitalOcean.Droplet
    .listImages(id, type, page, perPage)
    .then(collection => console.log(collection))
    .catch(e => console.log(e.message));
