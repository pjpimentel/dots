#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let id = process.argv[2];
let newSize = parseInt(process.argv[3]);

if(!id) throw new Error('Invalid id.');
if(!newSize) throw new Error('Invalid size.');

digitalOcean
    .Volume
    .resize(id, newSize)
    .then(action => console.log(action))
    .catch(e => console.log(e.message));
