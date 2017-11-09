#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

let success = data => console.log(data);
let error = error => console.log(error.message);
let id = process.argv[2];
let newSize = parseInt(process.argv[3]);

if (!id) throw new Error('Invalid id.');
if (!newSize) throw new Error('Invalid size.');

digitalOcean.Volume.resize(id, newSize).first().subscribe(success, error);