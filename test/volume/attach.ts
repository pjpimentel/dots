#!/usr/bin/env node
import digitalOcean from '../';

let success = data => console.log(data);
let error = error => console.log(error.message);
let volumeId = process.argv[2];
let dropletId = parseInt(process.argv[3]);
let region = process.argv[4];

if (!volumeId) throw new Error('Invalid volume id.');
if (!dropletId) throw new Error('Invalid droplet id.');

digitalOcean.Volume.attach(volumeId, dropletId, region).first().subscribe(success, error)
