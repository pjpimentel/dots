#!/usr/bin/env node
'use strict';
import * as fs from 'fs';
import * as path from 'path';

function isDir(p: string){

}

function getDirs(p: string){
    return fs
        .readdirSync(p)
        .filter(file =>
            fs.statSync(path.join(p, file)).isDirectory()
        );
}
function getFiles(p: string){
    return fs
        .readdirSync(p)
        .filter(file =>
            fs.statSync(path.join(p, file)).isFile()
        );
}

async function main(module: string, action: string): Promise<void>{
    let path = __dirname;
    if(!module){
        let modules = getDirs(path);
        console.log(modules);
        return;
    }
    path += '/' + module;
    let actions = getFiles(path);
    console.log(actions);
    return;
    
}

main(process.argv[2],process.argv[3]);
