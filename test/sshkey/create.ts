#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let name = process.argv[2];
let publicKey = process.argv[3];

if(!name) throw new Error('Invalid name.');
if(!publicKey) throw new Error('Invalid publicKey.');

digitalOcean
    .SSHKey
    .create({name:name,public_key:publicKey})
    .then(key => console.log(key))
    .catch(e => console.log(e.message));
