#!/usr/bin/env node
'use strict';
import digitalOcean from '../';

async function main(){
    try{
        console.log(await digitalOcean.Account.get())
    } catch(e){
        console.log(e.message);
    }
}

main();