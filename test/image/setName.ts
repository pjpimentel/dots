#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let uid = process.argv[2];
let name = process.argv[3];

if(!uid) throw new Error('Invalid uid.');
if(!name) throw new Error('Invaluid name.');

digitalOcean
    .Image
    .get(uid)
    .then(image => {
        console.log(image.name);
        image.setName(name)
            .then(() => console.log(image.name))
            .catch(e => console.log(e.message));
    })
    .catch(e => console.log(e.message));
