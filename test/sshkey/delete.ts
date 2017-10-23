#!/usr/bin/env node
import digitalOcean from '../';

let success = key => console.log('deleted!');
let error = error => console.log(error.message);
let uid = process.argv[2];

if (!uid) throw new Error('Invalid uid.');

digitalOcean.SSHKey
    .get(uid)
    .first()
    .flatMap(key => digitalOcean.SSHKey.delete(key.id).first())
    .subscribe(success, error)
