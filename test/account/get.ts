#!/usr/bin/env node
import digitalOcean from '../';

let success = data => console.log(data);
let error = error => console.log(error.message);
digitalOcean.Account.get().first().subscribe(success, error)
