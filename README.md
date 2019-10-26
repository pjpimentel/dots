# dots

## **digital ocean** API wrapper

[![travis](https://img.shields.io/travis/pjpimentel/dots/v3.0.0.svg?longCache=true)](https://travis-ci.org/pjpimentel/dots)
[![quality](https://sonarcloud.io/api/project_badges/measure?branch=v3.0.0&project=dots&metric=alert_status)](https://sonarcloud.io/dashboard?branch=v3.0.0&id=dots)
[![coverage](https://sonarcloud.io/api/project_badges/measure?branch=v3.0.0&project=dots&metric=coverage)](https://sonarcloud.io/dashboard?branch=v3.0.0&id=dots)
[![security](https://sonarcloud.io/api/project_badges/measure?branch=v3.0.0&project=dots&metric=security_rating)](https://sonarcloud.io/dashboard?branch=v3.0.0&id=dots)

## install
``` bash
    npm install --save dots-wrapper@latest
```
## usage
typescript/nodejs
``` typescript
    import { createApiClient } from 'dots-wrapper';
    const myApiToken = 'my-long-token';
    const dots = createApiClient({token: myApiToken});

    const account = await dots.account.getAccount();

    console.log(account);
```
## docs

1. [account](src/modules/account/README.md#account)
    1. [get-account](src/modules/account/README.md#get-account)
1. [action](src/modules/action/README.md#action)
    1. [get-action](src/modules/action/README.md#get-action)
    1. [list-actions](src/modules/action/README.md#list-actions)
1. [certificate](src/modules/certificate/README.md#certificate)
    1. [create-certificate](src/modules/certificate/README.md#create-certificate)
    1. [delete-certificates](src/modules/certificate/README.md#delete-certificates)
    1. [get-certificate](src/modules/certificate/README.md#get-certificate)
    1. [list-certificates](src/modules/certificate/README.md#list-certificates)


account
action
certificate
domain
droplet
firewall
floating-ip
image
load-balancer
region
size
snapshot
ssh-key
tag
volume

## License: [MIT](LICENSE)