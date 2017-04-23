#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let uid = parseInt(process.argv[2]);
let regionSlug = process.argv[3];

if(!uid) throw new Error('Invalid id.');
if(!regionSlug) throw new Error('Invalid region slug.');

digitalOcean
    .Image
    .transfer(uid, regionSlug)
    .then(action => console.log(action))
    .catch(e => console.log(e.message));
