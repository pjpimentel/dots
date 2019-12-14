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
1. [database](src/modules/database/README.md#database)
    1. [configure-database-cluster-eviction-policy](src/modules/database/README.md#configure-database-cluster-eviction-policy)
    1. [configure-database-cluster-maintenance-window](src/modules/database/README.md#configure-database-cluster-maintenance-window)
    1. [configure-database-cluster-sql-modes](src/modules/database/README.md#configure-database-cluster-sql-modes)
    1. [create-connection-pool](src/modules/database/README.md#create-connection-pool)
    1. [create-database-cluster-db](src/modules/database/README.md#create-database-cluster-db)
    1. [create-database-cluster-user](src/modules/database/README.md#create-database-cluster-user)
    1. [create-database-cluster](src/modules/database/README.md#create-database-cluster)
    1. [create-read-only-replica](src/modules/database/README.md#create-read-only-replica)
    1. [delete-connection-pool](src/modules/database/README.md#delete-connection-pool)
    1. [delete-database-cluster-db](src/modules/database/README.md#delete-database-cluster-db)
    1. [destroy-database-cluster](src/modules/database/README.md#destroy-database-cluster)
    1. [destroy-read-only-replica](src/modules/database/README.md#destroy-read-only-replica)
    1. [get-connection-pool](src/modules/database/README.md#get-connection-pool)
    1. [get-database-cluster-db](src/modules/database/README.md#get-database-cluster-db)
    1. [get-database-cluster-eviction-policy](src/modules/database/README.md#get-database-cluster-eviction-policy)
    1. [get-database-cluster-sql-mode](src/modules/database/README.md#get-database-cluster-sql-mode)
    1. [get-database-cluster-user](src/modules/database/README.md#get-database-cluster-user)
    1. [get-database-cluster](src/modules/database/README.md#get-database-cluster)
    1. [get-read-only-replica](src/modules/database/README.md#get-read-only-replica)
    1. [list-connection-pools](src/modules/database/README.md#list-connection-pools)
    1. [list-database-cluster-backups](src/modules/database/README.md#list-database-cluster-backups)
    1. [list-database-cluster-dbs](src/modules/database/README.md#list-database-cluster-dbs)
    1. [list-database-cluster-firewall-rules](src/modules/database/README.md#list-database-cluster-firewall-rules)
    1. [list-database-cluster-users](src/modules/database/README.md#list-database-cluster-users)
    1. [list-database-clusters](src/modules/database/README.md#list-database-clusters)
    1. [list-read-only-replicas](src/modules/database/README.md#list-read-only-replicas)
    1. [migrate-database-cluster](src/modules/database/README.md#migrate-database-cluster)
    1. [remove-database-cluster-user](src/modules/database/README.md#remove-database-cluster-user)
    1. [resize-database-cluster](src/modules/database/README.md#resize-database-cluster)
    1. [restore-database-cluster-backup](src/modules/database/README.md#restore-database-cluster-backup)
    1. [update-database-cluster-firewall-rules](src/modules/database/README.md#update-database-cluster-firewall-rules)
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
    1. [delete-droplets-by-tag](src/modules/droplet/README.md#delete-droplets-by-tag)
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
    1. [update-firewall](src/modules/firewall/README.md#update-firewall)
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
1. [kubernetes](src/modules/kubernetes/README.md#kubernetes)
    1. [create-kubernetes-cluster](src/modules/kubernetes/README.md#create-kubernetes-cluster)
    1. [get-kubernetes-cluster](src/modules/kubernetes/README.md#get-kubernetes-cluster)
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
1. [project](src/modules/project/README.md#project)
    1. [assign-resources-to-default-project](src/modules/project/README.md#assign-resources-to-default-project)
    1. [assign-resources-to-project](src/modules/project/README.md#assign-resources-to-project)
    1. [create-project](src/modules/project/README.md#create-project)
    1. [delete-project](src/modules/project/README.md#delete-project)
    1. [get-default-project](src/modules/project/README.md#get-default-project)
    1. [get-project](src/modules/project/README.md#get-project)
    1. [list-default-project-resources](src/modules/project/README.md#list-default-project-resources)
    1. [list-project-resources](src/modules/project/README.md#list-project-resources)
    1. [list-projects](src/modules/project/README.md#list-projects)
    1. [patch-default-project](src/modules/project/README.md#patch-default-project)
    1. [patch-project](src/modules/project/README.md#patch-project)
    1. [update-default-project](src/modules/project/README.md#update-default-project)
    1. [update-project](src/modules/project/README.md#update-project)
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

## contributors

<a href="https://github.com/Cosmic-Goat" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/13304815?v=3" title="ngryman" width="80" height="80">
</a>

## license: [mit](LICENSE)
