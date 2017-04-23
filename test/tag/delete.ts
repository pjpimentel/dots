#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let name = process.argv[2];
if(!name) throw new Error('Invalid name.');

digitalOcean
    .Tag
    .get(name)
    .then(tag => {
        tag.delete()
            .then(() => console.log('deleted!'))
            .catch(e => console.log(e.message));
    })
    .catch(e => console.log(e.message));
