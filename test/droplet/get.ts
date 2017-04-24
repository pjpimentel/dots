#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let id = parseInt(process.argv[2]);

if(!id) throw new Error('Invalid id.');

digitalOcean
    .Droplet
    .get(id)
    .then(droplet => console.log(droplet))
    .catch(e => console.log(e.message));
