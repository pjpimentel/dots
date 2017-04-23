#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let name = process.argv[2];

if(!name) throw new Error('Invalid name');

digitalOcean
    .Tag
    .get(name)
    .then(tag => console.log(tag))
    .catch(e => console.log(e.message));
