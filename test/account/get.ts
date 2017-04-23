#!/usr/bin/env node
'use strict';
import token from '../token';
import DigitalOcean from '../../';

const digitalOcean = new DigitalOcean(token);

digitalOcean.Account.get()
    .then(account => console.log(account))
    .catch(e => console.log(e.message))
