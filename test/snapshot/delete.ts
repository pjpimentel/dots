#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let id = process.argv[2];

if(!id) throw new Error('Invalid id.');

digitalOcean
    .Snapshot
    .delete(id)
    .then(() => console.log('deleted!'))
    .catch(e => console.log(e.message));
