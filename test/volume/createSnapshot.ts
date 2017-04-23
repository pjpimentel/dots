#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let id = process.argv[2];
let name = process.argv[3];

if(!id) throw new Error('Invalid id.');
if(!name) throw new Error('Invalid name.');

digitalOcean
    .Volume
    .createSnapshot(id, name)
    .then(snapshot => console.log(snapshot))
    .catch(e => console.log(e.message));
