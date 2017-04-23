#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let uid = parseInt(process.argv[2]);
if(!uid) throw new Error('Invalid uid.');

digitalOcean
    .SSHKey
    .get(uid)
    .then(key => {
        key.delete()
            .then(() => console.log('deleted!'))
            .catch(e => console.log(e.message));
    })
    .catch(e => console.log(e.message));
