#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let id = parseInt(process.argv[2]);
let slug = process.argv[3];
let resizeDisk = process.argv[4] ? true : false;

if(!id) throw new Error('Invalid id.');
if(!slug) throw new Error('Invalid slug.');

digitalOcean
    .Droplet
    .resize(id, slug, resizeDisk)
    .then(action => console.log(action))
    .catch(e => console.log(e.message));
