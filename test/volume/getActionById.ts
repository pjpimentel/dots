#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

let volumeId = process.argv[2];
let actionId = parseInt(process.argv[3]);

if(!volumeId) throw new Error('Invalid volume id.');
if(!actionId) throw new Error('Invalid action id.');
//TODO: test
digitalOcean
    .Volume
    .getActionById(volumeId, actionId)
    .then(action => console.log(action))
    .catch(e => console.log(e.message));
