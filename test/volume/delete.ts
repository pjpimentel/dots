#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let name = process.argv[2];
let region = process.argv[3];

if(!name) throw new Error('Invalid name.');
if(!region) region = undefined


digitalOcean
    .Volume
    .delete(name, region)
    .then(() => console.log('deleted!'))
    .catch(e => console.log(e.message));
