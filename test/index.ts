#!/usr/bin/env node
'use strict';
import token from './token';
import DigitalOcean from '../';
const digitalOcean: DigitalOcean = new DigitalOcean(token);
export default digitalOcean;