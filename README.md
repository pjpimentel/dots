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
1. [droplet](src/modules/droplet/README.md#droplet)
    1. [change-droplet-kernel](src/modules/droplet/README.md#change-droplet-kernel)
    1. [create-droplet](src/modules/droplet/README.md#create-droplet)
    1. [create-droplets](src/modules/droplet/README.md#create-droplets)
    1. [delete-droplet](src/modules/droplet/README.md#delete-droplet)
    1. [disable-droplet-backups](src/modules/droplet/README.md#disable-droplet-backups)
    1. [do-action-by-droplet-tag](src/modules/droplet/README.md#do-action-by-droplet-tag)
    1. [enable-droplet-backups](src/modules/droplet/README.md#enable-droplet-backups)
    1. [enable-droplet-ipv6](src/modules/droplet/README.md#enable-droplet-ipv6)
    1. [enable-droplet-private-networking](src/modules/droplet/README.md#enable-droplet-private-networking)
    1. [get-droplet](src/modules/droplet/README.md#get-droplet)
    1. [get-droplet-action](src/modules/droplet/README.md#get-droplet-action)
    1. [list-droplet-actions](src/modules/droplet/README.md#list-droplet-actions)
    1. [list-droplet-backups](src/modules/droplet/README.md#list-droplet-backups)
    1. [list-droplet-kernels](src/modules/droplet/README.md#list-droplet-kernels)
    1. [list-droplet-neighborhoods](src/modules/droplet/README.md#list-droplet-neighborhoods)
    1. [list-droplet-neighbors](src/modules/droplet/README.md#list-droplet-neighbors)
    1. [list-droplets](src/modules/droplet/README.md#list-droplets)
    1. [list-droplet-snapshots](src/modules/droplet/README.md#list-droplet-snapshots)
    1. [power-cycle-droplet](src/modules/droplet/README.md#power-cycle-droplet)
    1. [power-off-droplet](src/modules/droplet/README.md#power-off-droplet)
    1. [power-on-droplet](src/modules/droplet/README.md#power-on-droplet)
    1. [reboot-droplet](src/modules/droplet/README.md#reboot-droplet)
    1. [rebuild-droplet](src/modules/droplet/README.md#rebuild-droplet)
    1. [rename-droplet](src/modules/droplet/README.md#rename-droplet)
    1. [reset-droplet-password](src/modules/droplet/README.md#reset-droplet-password)
    1. [resize-droplet](src/modules/droplet/README.md#resize-droplet)
    1. [restore-droplet](src/modules/droplet/README.md#restore-droplet)
    1. [shutdown-droplet](src/modules/droplet/README.md#shutdown-droplet)
    1. [snapshot-droplet](src/modules/droplet/README.md#snapshot-droplet)

## license: [mit](LICENSE)