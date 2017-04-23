#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const Do = new DigitalOcean(token);

let id = parseInt(process.argv[2]);

if(!id)
    throw new Error('Missing id.');

Do.Action.get(id)
    .then(action => console.log(action))
    .catch(e => console.log(e.message));
