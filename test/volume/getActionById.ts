#!/usr/bin/env node
import digitalOcean from '../';

let success = data => console.log(data);
let error = error => console.log(error.message);
let volumeId = process.argv[2];
let actionId = parseInt(process.argv[3]);

if (!volumeId) throw new Error('Invalid volume id.');
if (!actionId) throw new Error('Invalid action id.');

digitalOcean.Volume.getActionById(volumeId, actionId).first().subscribe(success, error)