#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let uid = parseInt(process.argv[2]);
if(!uid) throw new Error('Invalid uid.');

digitalOcean
    .Image
    .get(uid)
    .then(image => {
        image.delete()
            .then(() => console.log('deleted!'))
            .catch(e => console.log(e.message));
    })
    .catch(e => console.log(e.message));
