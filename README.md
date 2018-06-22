# dots

**Digital Ocean** API **V2** wrapper. **TypeScript** - **Javascript**

**latest**

[![travis](https://img.shields.io/travis/pjpimentel/dots/master.svg?longCache=true&style=for-the-badge)](https://travis-ci.org/pjpimentel/dots)
![coveralls](https://img.shields.io/coveralls/github/pjpimentel/dots/master.svg?longCache=true&style=for-the-badge)
[![license](https://img.shields.io/npm/l/dots-wrapper.svg?longCache=true&style=for-the-badge)](https://github.com/pjpimentel/dots/blob/master/LICENSE)

[![npm version](https://img.shields.io/npm/v/dots-wrapper/latest.svg?longCache=true&style=for-the-badge)](https://www.npmjs.com/package/dots-wrapper?activeTab=versions)
[![npm downloads](https://img.shields.io/npm/dt/dots-wrapper.svg?longCache=true&style=for-the-badge)](https://www.npmjs.com/package/dots-wrapper)
[![dependencies](https://img.shields.io/david/pjpimentel/dots.svg?longCache=true&style=for-the-badge)](https://www.npmjs.com/package/dots-wrapper?activeTab=dependencies)

**beta**

[![travis](https://img.shields.io/travis/pjpimentel/dots/beta.svg?longCache=true&style=for-the-badge)](https://travis-ci.org/pjpimentel/dots)
![coveralls](https://img.shields.io/coveralls/github/pjpimentel/dots/beta.svg?longCache=true&style=for-the-badge)
[![license](https://img.shields.io/npm/l/dots-wrapper.svg?longCache=true&style=for-the-badge)](https://github.com/pjpimentel/dots/blob/beta/LICENSE)

[![npm version](https://img.shields.io/npm/v/dots-wrapper/beta.svg?longCache=true&style=for-the-badge)](https://www.npmjs.com/package/dots-wrapper?activeTab=versions)
[![npm downloads](https://img.shields.io/npm/dt/dots-wrapper.svg?longCache=true&style=for-the-badge)](https://www.npmjs.com/package/dots-wrapper)
[![dependencies](https://img.shields.io/david/pjpimentel/dots.svg?longCache=true&style=for-the-badge)](https://www.npmjs.com/package/dots-wrapper?activeTab=dependencies)


## Install
``` bash
    npm install --save dots-wrapper@latest
```
## Usage
Typescript
``` typescript
    import DigitalOcean from 'dots-wrapper';
    const myApiToken = 'my-long-token';
    const digitalOcean = new DigitalOcean(myApiToken);

    digitalOcean.Account.get().subscribe(
        account => console.log(account),
        err => console.log(err.message)
    );
```
Javascript - Nodejs
``` javascript
    const {DigitalOcean} = require('dots-wrapper');
    const myApiToken = 'my-long-token';
    const digitalOcean = new DigitalOcean(myApiToken);

    digitalOcean.Account.get().subscribe(
        account => console.log(account),
        err => console.log(err.message)
    );
```
## Docs

## [https://dots.pimentel.co](https://dots.pimentel.co)

## License: [MIT](LICENSE)

## TODO

Endpoint docs
Add firewall endpoint
Compile to Browser usage.
