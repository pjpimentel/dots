#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let name = process.argv[2];
let size = process.argv[3];
let region = process.argv[4];
let image = process.argv[5];

if(!name) throw new Error('Invalid name.');
if(!size) throw new Error('Invalid size.');
if(!region) throw new Error('Invalid region.');
if(!image) throw new Error('Invalid image.');

digitalOcean
    .Droplet
    .create({
        name: name,
        size: size,
        region: region,
        image: image
    })
    .then(droplet => console.log(droplet))
    .catch(e => console.log(e.message));
