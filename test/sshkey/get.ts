#!/usr/bin/env node
import digitalOcean from '../';

let success = data => console.log(data);
let error = error => console.log(error.message);
let uid = process.argv[2];

if (!uid) throw new Error('Invalid uid.');

digitalOcean.SSHKey.get(uid).first().subscribe(success, error)
