#!/usr/bin/env node
import digitalOcean from '../';

let success = data => console.log('deleted!');
let error = error => console.log(error.message);
let name = process.argv[2];
let region = process.argv[3];

if (!name) throw new Error('Invalid name.');
if (!region) region = undefined

digitalOcean.Volume.delete(name, region).first().subscribe(success, error)