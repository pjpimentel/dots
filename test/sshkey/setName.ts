#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let uid = process.argv[2];
let name = process.argv[3];

if(!uid) throw new Error('Invalid uid.');
if(!name) throw new Error('Invaluid name.');

digitalOcean
    .SSHKey
    .get(uid)
    .then(key => {
        console.log(key.name);
        key.setName(name)
            .then(() => console.log(key.name))
            .catch(e => console.log(e.message));
    })
    .catch(e => console.log(e.message));
