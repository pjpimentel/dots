#!/usr/bin/env node
import digitalOcean from '../';

let success = data => console.log('untagged!');
let error = error => console.log(error.message);
let name = process.argv[2];
let resource_id = process.argv[3];
let resource_type = process.argv[4];

if (!name) throw new Error('Invalid name.');
if (!resource_id) throw new Error('Invalid resource_id.');
if (!resource_type) throw new Error('Invalid resource_type.');

digitalOcean.Tag.untagResource(name, resource_id, resource_type).first().subscribe(success, error)
