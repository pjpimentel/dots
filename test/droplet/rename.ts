#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let id = parseInt(process.argv[2]);
let name = process.argv[3];

if(!id) throw new Error('Invalid id.');
if(!name) throw new Error('Invalid name.');

digitalOcean
    .Droplet
    .rename(id, name)
    .then(action => console.log(action))
    .catch(e => console.log(e.message));
