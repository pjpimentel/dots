# dots

## **digital ocean** API **v2** wrapper

[![travis](https://img.shields.io/travis/pjpimentel/dots/master.svg?longCache=true)](https://travis-ci.org/pjpimentel/dots)
[![quality](https://sonarcloud.io/api/project_badges/measure?branch=master&project=dots&metric=alert_status)](https://sonarcloud.io/dashboard?branch=master&id=dots)
[![coverage](https://sonarcloud.io/api/project_badges/measure?branch=master&project=dots&metric=coverage)](https://sonarcloud.io/dashboard?branch=master&id=dots)
[![security](https://sonarcloud.io/api/project_badges/measure?branch=master&project=dots&metric=security_rating)](https://sonarcloud.io/dashboard?branch=master&id=dots)

[![npm version](https://img.shields.io/npm/v/dots-wrapper/latest.svg?longCache=true)](https://www.npmjs.com/package/dots-wrapper?activeTab=versions)
[![npm downloads](https://img.shields.io/npm/dt/dots-wrapper.svg?longCache=true)](https://www.npmjs.com/package/dots-wrapper)
[![dependencies](https://img.shields.io/david/pjpimentel/dots.svg?longCache=true)](https://www.npmjs.com/package/dots-wrapper?activeTab=dependencies)
[![license](https://img.shields.io/npm/l/dots-wrapper.svg?longCache=true)](https://github.com/pjpimentel/dots/blob/master/LICENSE)

## Install
``` bash
    npm install --save dots-wrapper@latest
```
## Usage
Typescript
``` typescript
    import { createApiClient } from 'dots-wrapper';
    const myApiToken = 'my-long-token';
    const digitalOcean = createApiClient({token: myApiToken});

    const account = await digitalOcean.account.getAccount();

    console.log(account);
```
Javascript - Nodejs
``` javascript
    import { createApiClient } from 'dots-wrapper';
    const myApiToken = 'my-long-token';
    const digitalOcean = createApiClient({token: myApiToken});

    const account = await digitalOcean.account.getAccount();

    console.log(account);
```
## Docs

## [https://dots.pimentel.co](https://dots.pimentel.co)

## License: [MIT](LICENSE)