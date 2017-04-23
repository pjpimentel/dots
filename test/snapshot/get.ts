#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let id = process.argv[2];

if(!id) throw new Error('Invalid id.');

digitalOcean
    .Snapshot
    .get(id)
    .then(snapshot => console.log(snapshot))
    .catch(e => console.log(e.message));
