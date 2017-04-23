#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let volumeId = process.argv[2];
let dropletId = parseInt(process.argv[3]);
let region = process.argv[4];

if(!volumeId) throw new Error('Invalid volume id.');
if(!dropletId) throw new Error('Invalid droplet id.');


digitalOcean
    .Volume
    .attach(volumeId, dropletId, region)
    .then(action => console.log(action))
    .catch(e => console.log(e.message));
