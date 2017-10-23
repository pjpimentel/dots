#!/usr/bin/env node
import digitalOcean from '../';

let success = data => console.log(data);
let error = error => console.log(error.message);
let name = process.argv[2];

if (!name) throw new Error('Invalid name.');

digitalOcean.Tag.create({ name: name }).first().subscribe(success, error)
