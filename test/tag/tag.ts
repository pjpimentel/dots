#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let name = process.argv[2];
let resource_id = process.argv[3];
let resource_type = process.argv[4];

if(!name) throw new Error('Invalid name.');
if(!resource_id) throw new Error('Invalid resource_id.');
if(!resource_type) throw new Error('Invalid resource_type.');

digitalOcean
    .Tag
    .tagResource(name,resource_id,resource_type)
    .then(() => console.log('tagged!'))
    .catch(e => console.log(e.message));
