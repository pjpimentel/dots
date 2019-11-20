# ··· dots ···

## **digital ocean** API wrapper

[![actions](https://github.com/pjpimentel/dots/workflows/build/badge.svg?branch=master)](https://github.com/pjpimentel/dots/actions)
[![quality](https://sonarcloud.io/api/project_badges/measure?branch=master&project=dots&metric=alert_status)](https://sonarcloud.io/dashboard?branch=master&id=dots)
[![coverage](https://sonarcloud.io/api/project_badges/measure?branch=master&project=dots&metric=coverage)](https://sonarcloud.io/dashboard?branch=master&id=dots)
[![security](https://sonarcloud.io/api/project_badges/measure?branch=master&project=dots&metric=security_rating)](https://sonarcloud.io/dashboard?branch=master&id=dots)

## installing
``` bash
    npm install --save dots-wrapper@latest
```
## using

### typescript
``` typescript
  import { createApiClient } from 'dots-wrapper';
  const myApiToken = 'my-long-token';
  const dots = createApiClient({token: myApiToken});

  const main = async () => {
    const {data:{account}} = await dots.account.getAccount();
    console.log(account);
  };

  main();
```

### javascript/nodejs
``` javascript
  const {createApiClient} = require('dots-wrapper');
  const myApiToken = 'my-long-token';
  const dots = createApiClient({token: myApiToken});

  const main = async () => {
    const {data:{account}} = await dots.account.getAccount();
    console.log(account);
  };

  main();
```

### browser

index.html
``` html
  <script src='https://unpkg.com/dots-wrapper@latest/dist/index-browser.min.js'></script>
```
js.js
``` javascript
  const {createApiClient} = window.dots;
  const myApiToken = 'my-long-token';
  const dots = createApiClient({token: myApiToken});

  const main = async () => {
    const {data:{account}} = await dots.account.getAccount();
    console.log(account);
  };

  main();
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
1. [firewall](src/modules/firewall/README.md#firewall)
    1. [add-droplets-to-firewall](src/modules/firewall/README.md#add-droplets-to-firewall)
    1. [add-rules-to-firewall](src/modules/firewall/README.md#add-rules-to-firewall)
    1. [add-tags-to-firewall](src/modules/firewall/README.md#add-tags-to-firewall)
    1. [create-firewall](src/modules/firewall/README.md#create-firewall)
    1. [delete-firewall](src/modules/firewall/README.md#delete-firewall)
    1. [get-firewall](src/modules/firewall/README.md#get-firewall)
    1. [list-firewalls](src/modules/firewall/README.md#list-firewalls)
    1. [remove-droplets-from-firewall](src/modules/firewall/README.md#remove-droplets-from-firewall)
    1. [remove-rules-from-firewall](src/modules/firewall/README.md#remove-rules-from-firewall)
    1. [remove-tags-from-firewall](src/modules/firewall/README.md#remove-tags-from-firewall)
    1. [update-firewal](src/modules/firewall/README.md#update-firewal)
1. [floating-ip](src/modules/floating-ip/README.md#floating-ip)
    1. [assign-ip-to-droplet](src/modules/floating-ip/README.md#assign-ip-to-droplet)
    1. [create-floating-ip](src/modules/floating-ip/README.md#create-floating-ip)
    1. [delete-floating-ip](src/modules/floating-ip/README.md#delete-floating-ip)
    1. [get-floating-ip](src/modules/floating-ip/README.md#get-floating-ip)
    1. [get-floating-ip-action](src/modules/floating-ip/README.md#get-floating-ip-action)
    1. [list-floating-ip-actions](src/modules/floating-ip/README.md#list-floating-ip-actions)
    1. [list-floating-ips](src/modules/floating-ip/README.md#list-floating-ips)
    1. [unassign-ip-from-droplet](src/modules/floating-ip/README.md#unassign-ip-from-droplet)
1. [image](src/modules/image/README.md#image)
    1. [convert-image-to-snapshot](src/modules/image/README.md#convert-image-to-snapshot)
    1. [create-custom-image](src/modules/image/README.md#create-custom-image)
    1. [delete-image](src/modules/image/README.md#delete-image)
    1. [get-image](src/modules/image/README.md#get-image)
    1. [get-image-action](src/modules/image/README.md#get-image-action)
    1. [list-image-actions](src/modules/image/README.md#list-image-actions)
    1. [list-images](src/modules/image/README.md#list-images)
    1. [transfer-image](src/modules/image/README.md#transfer-image)
    1. [update-image](src/modules/image/README.md#update-image)
1. [load-balancer](src/modules/load-balancer/README.md#load-balancer)
    1. [add-droplets-to-load-balancer](src/modules/load-balancer/README.md#add-droplets-to-load-balancer)
    1. [add-rules-to-load-balancer](src/modules/load-balancer/README.md#add-rules-to-load-balancer)
    1. [create-load-balancer](src/modules/load-balancer/README.md#create-load-balancer)
    1. [delete-load-balancer](src/modules/load-balancer/README.md#delete-load-balancer)
    1. [get-load-balancer](src/modules/load-balancer/README.md#get-load-balancer)
    1. [list-load-balancers](src/modules/load-balancer/README.md#list-load-balancers)
    1. [remove-droplets-from-load-balancer](src/modules/load-balancer/README.md#remove-droplets-from-load-balancer)
    1. [remove-rules-from-load-balancer](src/modules/load-balancer/README.md#remove-rules-from-load-balancer)
    1. [update-load-balancer](src/modules/load-balancer/README.md#update-load-balancer)
1. [region](src/modules/region/README.md#region)
    1. [list-regions](src/modules/region/README.md#list-regions)
1. [size](src/modules/size/README.md#size)
    1. [list-sizes](src/modules/size/README.md#list-sizes)
1. [snapshot](src/modules/snapshot/README.md#snapshot)
    1. [delete-snapshot](src/modules/snapshot/README.md#delete-snapshot)
    1. [get-snapshot](src/modules/snapshot/README.md#get-snapshot)
    1. [list-snapshots](src/modules/snapshot/README.md#list-snapshots)
1. [ssh-key](src/modules/ssh-key/README.md#ssh-key)
    1. [create-ssh-key](src/modules/ssh-key/README.md#create-ssh-key)
    1. [destroy-ssh-key](src/modules/ssh-key/README.md#destroy-ssh-key)
    1. [get-ssh-key](src/modules/ssh-key/README.md#get-ssh-key)
    1. [list-ssh-keys](src/modules/ssh-key/README.md#list-ssh-keys)
    1. [update-ssh-key](src/modules/ssh-key/README.md#update-ssh-key)
1. [tag](src/modules/tag/README.md#tag)
    1. [create-tag](src/modules/tag/README.md#create-tag)
    1. [delete-tag](src/modules/tag/README.md#delete-tag)
    1. [get-tag](src/modules/tag/README.md#get-tag)
    1. [list-tags](src/modules/tag/README.md#list-tags)
    1. [tag-resources](src/modules/tag/README.md#tag-resources)
    1. [untag-resources](src/modules/tag/README.md#untag-resources)
1. [volume](src/modules/volume/README.md#volume)
    1. [attach-volume-to-droplet](src/modules/volume/README.md#attach-volume-to-droplet)
    1. [create-volume](src/modules/volume/README.md#create-volume)
    1. [create-volume-snapshot](src/modules/volume/README.md#create-volume-snapshot)
    1. [delete-volume](src/modules/volume/README.md#delete-volume)
    1. [detach-volume-from-droplet](src/modules/volume/README.md#detach-volume-from-droplet)
    1. [get-volume](src/modules/volume/README.md#get-volume)
    1. [get-volume-action](src/modules/volume/README.md#get-volume-action)
    1. [list-volume-actions](src/modules/volume/README.md#list-volume-actions)
    1. [list-volumes](src/modules/volume/README.md#list-volumes)
    1. [list-volume-snapshots](src/modules/volume/README.md#list-volume-snapshots)
    1. [resize-volume](src/modules/volume/README.md#resize-volume)

## license: [mit](LICENSE)
