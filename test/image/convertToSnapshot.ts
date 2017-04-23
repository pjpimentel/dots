#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let id = parseInt(process.argv[2]);

if(!id) throw new Error('invalid id.');

digitalOcean.Image.convertToSnapshot(id)
    .then(action => console.log(action))
    .catch(e => console.log(e.message));
