#!/usr/bin/env node
import digitalOcean from '../';

let success = data => console.log('deleted!');
let error = error => console.log(error.message);
let name = process.argv[2];

if (!name) throw new Error('Invalid name.');

digitalOcean.Tag.delete(name).first().subscribe(success, error)
