#!/usr/bin/env node
import digitalOcean from '../';

let success = key => console.log(key.name);
let error = error => console.log(error.message);
let uid = process.argv[2];
let name = process.argv[3];

if (!uid) throw new Error('Invalid uid.');
if (!name) throw new Error('Invaluid name.');

digitalOcean.SSHKey
    .get(uid)
    .first()
    .map(key => success(key) || key)
    .flatMap(key => digitalOcean.SSHKey.update(key.id, { name: name }).first())
    .subscribe(success, error)
