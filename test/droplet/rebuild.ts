#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let id = parseInt(process.argv[2]);
let image: string|number = process.argv[3];

if(!id) throw new Error('Invalid id.');
if(!image) throw new Error('Invalid image.');

digitalOcean
    .Droplet
    .rebuild(id, image)
    .then(action => console.log(action))
    .catch(e => console.log(e.message));
