#!/usr/bin/env node
import digitalOcean from '../';

let success = key => console.log(key);
let error = error => console.log(error.message);
let name = process.argv[2];
let publicKey = process.argv[3];

if (!name) throw new Error('Invalid name.');
if (!publicKey) throw new Error('Invalid publicKey.');

digitalOcean.SSHKey.create({ name: name, public_key: publicKey }).first().subscribe(success, error);
