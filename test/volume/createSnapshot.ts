#!/usr/bin/env node
import digitalOcean from '../';

let success = data => console.log(data);
let error = error => console.log(error.message);
let id = process.argv[2];
let name = process.argv[3];

if (!id) throw new Error('Invalid id.');
if (!name) throw new Error('Invalid name.');

digitalOcean.Volume.createSnapshot(id, name).first().subscribe(success, error)