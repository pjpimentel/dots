#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let uid = process.argv[2];

if(!uid) throw new Error('Invalid uid.');

digitalOcean
    .Image
    .get(uid)
    .then(image => console.log(image))
    .catch(e => console.log(e.message));
