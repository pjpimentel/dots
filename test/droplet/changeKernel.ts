#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let id = parseInt(process.argv[2]);
let kernel = parseInt(process.argv[3]);

if(!id) throw new Error('Invalid id.');
if(!kernel) throw new Error('Invalid kernel.');

digitalOcean
    .Droplet
    .changeKernel(id, kernel)
    .then(action => console.log(action))
    .catch(e => console.log(e.message));
