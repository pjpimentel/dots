#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let id = parseInt(process.argv[2]);

if(!id) throw new Error('Invalid id.');

digitalOcean
    .Droplet
    .powerOff(id)
    .then(action => console.log(action))
    .catch(e => console.log(e.message));
