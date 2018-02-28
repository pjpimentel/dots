#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

const name = process.argv[2];
const size = process.argv[3];
const region = process.argv[4];
const image = process.argv[5];

if(!name) throw new Error('Invalid name.');
if(!size) throw new Error('Invalid size.');
if(!region) throw new Error('Invalid region.');
if(!image) throw new Error('Invalid image.');

const onDropletCreated = droplet => console.log(droplet);
const onDropletCreateError = err => console.log(err);

digitalOcean
    .Droplet
    .create({ name, size, region, image })
    .subscribe(onDropletCreated,onDropletCreateError);
