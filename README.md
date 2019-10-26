# ··· dots ···

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
    1. [delete-certificate](src/modules/certificate/README.md#delete-certificate)
    1. [get-certificate](src/modules/certificate/README.md#get-certificate)
    1. [list-certificates](src/modules/certificate/README.md#list-certificates)
1. [domain](src/modules/domain/README.md#domain)
    1. [create-domain](src/modules/domain/README.md#create-domain)
    1. [create-domain-record](src/modules/domain/README.md#create-domain-record)
    1. [delete-domain](src/modules/domain/README.md#delete-domain)
    1. [delete-domain-record](src/modules/domain/README.md#delete-domain-record)
    1. [get-domain](src/modules/domain/README.md#get-domain)
    1. [get-domain-record](src/modules/domain/README.md#get-domain-record)
    1. [list-domain-records](src/modules/domain/README.md#list-domain-records)
    1. [list-domains](src/modules/domain/README.md#list-domains)
    1. [update-domain-record](src/modules/domain/README.md#update-domain-record)

## license: [mit](LICENSE)