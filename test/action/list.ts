#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const Do = new DigitalOcean(token);

let page = parseInt(process.argv[2]);
let perPage = parseInt(process.argv[3]);

if(!page) page = 1;
if(!perPage) perPage = null;

Do.Action.list(page, perPage)
    .then(collection => {
        console.log(collection);
    })
    .catch(e => console.log(e.message));
