#!/usr/bin/env node
import digitalOcean from '../';

let success = data => console.log(data);
let error = error => console.log(error.message);
let id = parseInt(process.argv[2]);

if (!id) throw new Error('Invalid id.');

digitalOcean.Action.get(id).first().subscribe(success, error)
