#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let name = process.argv[2];
let size = parseInt(process.argv[3]);
let region = process.argv[4];
let description = process.argv[5];

if(!name) throw new Error('Invalid name.');
if(!size) throw new Error('Invalid size.');
if(!region) throw new Error('Invalid region.');
if(!description) description = undefined;

digitalOcean
    .Volume
    .create({
        name: name,
        size_gigabytes: size,
        region: region,
        description: description
    })
    .then(volume => console.log(volume))
    .catch(e => console.log(e.message));
