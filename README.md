# dots <a href="https://www.buymeacoffee.com/pjpimentel"><img align=right width=150 src="https://img.buymeacoffee.com/button-api/?text=buy me a coffee&emoji=&slug=pjpimentel&button_colour=5F7FFF&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD01" /></a>

## digital ocean api wrapper

[![actions](https://github.com/pjpimentel/dots/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/pjpimentel/dots/actions/workflows/build.yml)
[![quality](https://sonarcloud.io/api/project_badges/measure?branch=master&project=dots&metric=alert_status)](https://sonarcloud.io/dashboard?branch=master&id=dots)
[![coverage](https://sonarcloud.io/api/project_badges/measure?branch=master&project=dots&metric=coverage)](https://sonarcloud.io/dashboard?branch=master&id=dots)
[![security](https://sonarcloud.io/api/project_badges/measure?branch=master&project=dots&metric=security_rating)](https://sonarcloud.io/dashboard?branch=master&id=dots)
[![npm](https://img.shields.io/npm/dm/dots-wrapper.svg)](https://www.npmjs.com/package/dots-wrapper)


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

1. [account](src/account/README.md#account)
    1. [get-account](src/account/README.md#get-account)
1. [action](src/action/README.md#action)
    1. [get-action](src/action/README.md#get-action)
    1. [list-actions](src/action/README.md#list-actions)
1. [app](src/app/README.md#app)
    1. [cancel-app-deployment](src/app/README.md#cancel-app-deployment)
    1. [create-app-deployment](src/app/README.md#create-app-deployment)
    1. [create-app](src/app/README.md#create-app)
    1. [delete-app](src/app/README.md#delete-app)
    1. [get-active-deployment-logs](src/app/README.md#get-active-deployment-logs)
    1. [get-aggregated-app-deployment-logs](src/app/README.md#get-aggregated-app-deployment-logs)
    1. [get-app-deployment-logs](src/app/README.md#get-app-deployment-logs)
    1. [get-app-deployment](src/app/README.md#get-app-deployment)
    1. [get-app](src/app/README.md#get-app)
    1. [list-app-deployments](src/app/README.md#list-app-deployments)
    1. [list-apps](src/app/README.md#list-apps)
    1. [run-app-detection](src/app/README.md#run-app-detection)
    1. [update-app](src/app/README.md#update-app)
1. [cdn-endpoint](src/cdn-endpoint/README.md#cdn-endpoint)
    1. [create-cdn-endpoint](src/cdn-endpoint/README.md#create-cdn-endpoint)
    1. [delete-cdn-endpoint](src/cdn-endpoint/README.md#delete-cdn-endpoint)
    1. [get-cdn-endpoint](src/cdn-endpoint/README.md#get-cdn-endpoint)
    1. [list-cdn-endpoints](src/cdn-endpoint/README.md#list-cdn-endpoints)
    1. [purge-cache](src/cdn-endpoint/README.md#purge-cache)
    1. [update-cdn-endpoint](src/cdn-endpoint/README.md#update-cdn-endpoint)
1. [certificate](src/certificate/README.md#certificate)
    1. [create-certificate](src/certificate/README.md#create-certificate)
    1. [delete-certificate](src/certificate/README.md#delete-certificate)
    1. [get-certificate](src/certificate/README.md#get-certificate)
    1. [list-certificates](src/certificate/README.md#list-certificates)
1. [container-registry](src/container-registry/README.md#container-registry)
    1. [configure-registry](src/container-registry/README.md#configure-registry)
    1. [delete-registry](src/container-registry/README.md#delete-registry)
    1. [get-docker-credentials](src/container-registry/README.md#get-docker-credentials)
    1. [get-registry](src/container-registry/README.md#get-registry)
1. [customer](src/customer/README.md#customer)
    1. [download-invoice](src/customer/README.md#download-invoice)
    1. [get-balance](src/customer/README.md#get-balance)
    1. [get-invoice-summary](src/customer/README.md#get-invoice-summary)
    1. [list-billing-history](src/customer/README.md#list-billing-history)
    1. [list-invoice-items](src/customer/README.md#list-invoice-items)
    1. [list-invoices](src/customer/README.md#list-invoices)
1. [database](src/database/README.md#database)
    1. [configure-database-cluster-eviction-policy](src/database/README.md#configure-database-cluster-eviction-policy)
    1. [configure-database-cluster-maintenance-window](src/database/README.md#configure-database-cluster-maintenance-window)
    1. [configure-database-cluster-sql-modes](src/database/README.md#configure-database-cluster-sql-modes)
    1. [create-connection-pool](src/database/README.md#create-connection-pool)
    1. [create-database-cluster-db](src/database/README.md#create-database-cluster-db)
    1. [create-database-cluster-user](src/database/README.md#create-database-cluster-user)
    1. [create-database-cluster](src/database/README.md#create-database-cluster)
    1. [create-read-only-replica](src/database/README.md#create-read-only-replica)
    1. [delete-connection-pool](src/database/README.md#delete-connection-pool)
    1. [delete-database-cluster-db](src/database/README.md#delete-database-cluster-db)
    1. [destroy-database-cluster](src/database/README.md#destroy-database-cluster)
    1. [destroy-read-only-replica](src/database/README.md#destroy-read-only-replica)
    1. [get-connection-pool](src/database/README.md#get-connection-pool)
    1. [get-database-cluster-db](src/database/README.md#get-database-cluster-db)
    1. [get-database-cluster-eviction-policy](src/database/README.md#get-database-cluster-eviction-policy)
    1. [get-database-cluster-sql-mode](src/database/README.md#get-database-cluster-sql-mode)
    1. [get-database-cluster-user](src/database/README.md#get-database-cluster-user)
    1. [get-database-cluster](src/database/README.md#get-database-cluster)
    1. [get-read-only-replica](src/database/README.md#get-read-only-replica)
    1. [list-connection-pools](src/database/README.md#list-connection-pools)
    1. [list-database-cluster-backups](src/database/README.md#list-database-cluster-backups)
    1. [list-database-cluster-dbs](src/database/README.md#list-database-cluster-dbs)
    1. [list-database-cluster-firewall-rules](src/database/README.md#list-database-cluster-firewall-rules)
    1. [list-database-cluster-users](src/database/README.md#list-database-cluster-users)
    1. [list-database-clusters](src/database/README.md#list-database-clusters)
    1. [list-database-options](src/database/README.md#list-database-options)
    1. [list-read-only-replicas](src/database/README.md#list-read-only-replicas)
    1. [migrate-database-cluster](src/database/README.md#migrate-database-cluster)
    1. [remove-database-cluster-user](src/database/README.md#remove-database-cluster-user)
    1. [resize-database-cluster](src/database/README.md#resize-database-cluster)
    1. [restore-database-cluster-backup](src/database/README.md#restore-database-cluster-backup)
    1. [update-database-cluster-firewall-rules](src/database/README.md#update-database-cluster-firewall-rules)
1. [domain](src/domain/README.md#domain)
    1. [create-domain](src/domain/README.md#create-domain)
    1. [create-domain-record](src/domain/README.md#create-domain-record)
    1. [delete-domain](src/domain/README.md#delete-domain)
    1. [delete-domain-record](src/domain/README.md#delete-domain-record)
    1. [get-domain](src/domain/README.md#get-domain)
    1. [get-domain-record](src/domain/README.md#get-domain-record)
    1. [list-domain-records](src/domain/README.md#list-domain-records)
    1. [list-domains](src/domain/README.md#list-domains)
    1. [update-domain-record](src/domain/README.md#update-domain-record)
1. [droplet](src/droplet/README.md#droplet)
    1. [change-droplet-kernel](src/droplet/README.md#change-droplet-kernel)
    1. [create-droplet](src/droplet/README.md#create-droplet)
    1. [create-droplets](src/droplet/README.md#create-droplets)
    1. [delete-droplet](src/droplet/README.md#delete-droplet)
    1. [delete-droplets-by-tag](src/droplet/README.md#delete-droplets-by-tag)
    1. [destroy-droplet-and-all-associated-resources](src/droplet/README.md#destroy-droplet-and-all-associated-resources)
    1. [destroy-droplet-and-associated-resources](src/droplet/README.md#destroy-droplet-and-associated-resources)
    1. [disable-droplet-backups](src/droplet/README.md#disable-droplet-backups)
    1. [do-action-by-droplet-tag](src/droplet/README.md#do-action-by-droplet-tag)
    1. [enable-droplet-backups](src/droplet/README.md#enable-droplet-backups)
    1. [enable-droplet-ipv6](src/droplet/README.md#enable-droplet-ipv6)
    1. [enable-droplet-private-networking](src/droplet/README.md#enable-droplet-private-networking)
    1. [get-droplet-action](src/droplet/README.md#get-droplet-action)
    1. [get-droplet-destroy-status](src/droplet/README.md#get-droplet-destroy-status)
    1. [get-droplet](src/droplet/README.md#get-droplet)
    1. [list-droplet-actions](src/droplet/README.md#list-droplet-actions)
    1. [list-droplet-associated-resources](src/droplet/README.md#list-droplet-associated-resources)
    1. [list-droplet-backups](src/droplet/README.md#list-droplet-backups)
    1. [list-droplet-kernels](src/droplet/README.md#list-droplet-kernels)
    1. [list-droplet-neighborhoods](src/droplet/README.md#list-droplet-neighborhoods)
    1. [list-droplet-neighbors](src/droplet/README.md#list-droplet-neighbors)
    1. [list-droplet-snapshots](src/droplet/README.md#list-droplet-snapshots)
    1. [list-droplets](src/droplet/README.md#list-droplets)
    1. [power-cycle-droplet](src/droplet/README.md#power-cycle-droplet)
    1. [power-off-droplet](src/droplet/README.md#power-off-droplet)
    1. [power-on-droplet](src/droplet/README.md#power-on-droplet)
    1. [reboot-droplet](src/droplet/README.md#reboot-droplet)
    1. [rebuild-droplet](src/droplet/README.md#rebuild-droplet)
    1. [rename-droplet](src/droplet/README.md#rename-droplet)
    1. [reset-droplet-password](src/droplet/README.md#reset-droplet-password)
    1. [resize-droplet](src/droplet/README.md#resize-droplet)
    1. [restore-droplet](src/droplet/README.md#restore-droplet)
    1. [retry-droplet-destroy](src/droplet/README.md#retry-droplet-destroy)
    1. [shutdown-droplet](src/droplet/README.md#shutdown-droplet)
    1. [snapshot-droplet](src/droplet/README.md#snapshot-droplet)
1. [firewall](src/firewall/README.md#firewall)
    1. [add-droplets-to-firewall](src/firewall/README.md#add-droplets-to-firewall)
    1. [add-rules-to-firewall](src/firewall/README.md#add-rules-to-firewall)
    1. [add-tags-to-firewall](src/firewall/README.md#add-tags-to-firewall)
    1. [create-firewall](src/firewall/README.md#create-firewall)
    1. [delete-firewall](src/firewall/README.md#delete-firewall)
    1. [get-firewall](src/firewall/README.md#get-firewall)
    1. [list-firewalls](src/firewall/README.md#list-firewalls)
    1. [remove-droplets-from-firewall](src/firewall/README.md#remove-droplets-from-firewall)
    1. [remove-rules-from-firewall](src/firewall/README.md#remove-rules-from-firewall)
    1. [remove-tags-from-firewall](src/firewall/README.md#remove-tags-from-firewall)
    1. [update-firewall](src/firewall/README.md#update-firewall)
1. [floating-ip](src/floating-ip/README.md#floating-ip)
    1. [assign-ip-to-droplet](src/floating-ip/README.md#assign-ip-to-droplet)
    1. [create-floating-ip](src/floating-ip/README.md#create-floating-ip)
    1. [delete-floating-ip](src/floating-ip/README.md#delete-floating-ip)
    1. [get-floating-ip](src/floating-ip/README.md#get-floating-ip)
    1. [get-floating-ip-action](src/floating-ip/README.md#get-floating-ip-action)
    1. [list-floating-ip-actions](src/floating-ip/README.md#list-floating-ip-actions)
    1. [list-floating-ips](src/floating-ip/README.md#list-floating-ips)
    1. [unassign-ip-from-droplet](src/floating-ip/README.md#unassign-ip-from-droplet)
1. [gen-ai](src/gen-ai/README.md#gen-ai)
    1. [list-models](src/gen-ai/README.md#list-models)
    1. [list-regions](src/gen-ai/README.md#list-regions)
    1. [list-agents](src/gen-ai/README.md#list-agents)
    1. [create-agent](src/gen-ai/README.md#create-agent)
    1. [get-agent](src/gen-ai/README.md#get-agent)
    1. [update-agent](src/gen-ai/README.md#update-agent)
    1. [delete-agent](src/gen-ai/README.md#delete-agent)
    1. [update-agent-visibility](src/gen-ai/README.md#update-agent-visibility)
    1. [list-agent-keys](src/gen-ai/README.md#list-agent-keys)
    1. [create-agent-key](src/gen-ai/README.md#create-agent-key)
    1. [update-agent-key](src/gen-ai/README.md#update-agent-key)
    1. [delete-agent-key](src/gen-ai/README.md#delete-agent-key)
    1. [regenerate-agent-key](src/gen-ai/README.md#regenerate-agent-key)
    1. [list-agent-routes](src/gen-ai/README.md#list-agent-routes)
    1. [attach-agent-route](src/gen-ai/README.md#attach-agent-route)
    1. [update-agent-route](src/gen-ai/README.md#update-agent-route)
    1. [detach-agent-route](src/gen-ai/README.md#detach-agent-route)
    1. [attach-function-route](src/gen-ai/README.md#attach-function-route)
    1. [update-function-route](src/gen-ai/README.md#update-function-route)
    1. [detach-function-route](src/gen-ai/README.md#detach-function-route)
    1. [attach-knowledge-base](src/gen-ai/README.md#attach-knowledge-base)
    1. [attach-knowledge-bases](src/gen-ai/README.md#attach-knowledge-bases)
    1. [detach-knowledge-base](src/gen-ai/README.md#detach-knowledge-base)
    1. [list-agent-versions](src/gen-ai/README.md#list-agent-versions)
    1. [rollback-agent-version](src/gen-ai/README.md#rollback-agent-version)  
*The agent versioning methods above are experimental and may change without notice.*  
    1. [list-openai-keys](src/gen-ai/README.md#list-openai-keys)
    1. [create-openai-key](src/gen-ai/README.md#create-openai-key)
    1. [get-openai-key](src/gen-ai/README.md#get-openai-key)
    1. [update-openai-key](src/gen-ai/README.md#update-openai-key)
    1. [delete-openai-key](src/gen-ai/README.md#delete-openai-key)
    1. [list-agents-by-openai-key](src/gen-ai/README.md#list-agents-by-openai-key)
    1. [list-anthropic-keys](src/gen-ai/README.md#list-anthropic-keys)
    1. [create-anthropic-key](src/gen-ai/README.md#create-anthropic-key)
    1. [get-anthropic-key](src/gen-ai/README.md#get-anthropic-key)
    1. [update-anthropic-key](src/gen-ai/README.md#update-anthropic-key)
    1. [delete-anthropic-key](src/gen-ai/README.md#delete-anthropic-key)
    1. [list-agents-by-anthropic-key](src/gen-ai/README.md#list-agents-by-anthropic-key)
    1. [list-knowledge-bases](src/gen-ai/README.md#list-knowledge-bases)
    1. [create-knowledge-base](src/gen-ai/README.md#create-knowledge-base)
    1. [get-knowledge-base](src/gen-ai/README.md#get-knowledge-base)
    1. [update-knowledge-base](src/gen-ai/README.md#update-knowledge-base)
    1. [delete-knowledge-base](src/gen-ai/README.md#delete-knowledge-base)
    1. [list-knowledge-base-data-sources](src/gen-ai/README.md#list-knowledge-base-data-sources)
    1. [add-knowledge-base-data-source](src/gen-ai/README.md#add-knowledge-base-data-source)
    1. [delete-knowledge-base-data-source](src/gen-ai/README.md#delete-knowledge-base-data-source)
    1. [list-indexing-jobs](src/gen-ai/README.md#list-indexing-jobs)
    1. [create-indexing-job](src/gen-ai/README.md#create-indexing-job)
    1. [list-indexing-job-data-sources](src/gen-ai/README.md#list-indexing-job-data-sources)
    1. [get-indexing-job](src/gen-ai/README.md#get-indexing-job)
    1. [cancel-indexing-job](src/gen-ai/README.md#cancel-indexing-job)
1. [image](src/image/README.md#image)
    1. [convert-image-to-snapshot](src/image/README.md#convert-image-to-snapshot)
    1. [create-custom-image](src/image/README.md#create-custom-image)
    1. [delete-image](src/image/README.md#delete-image)
    1. [get-image](src/image/README.md#get-image)
    1. [get-image-action](src/image/README.md#get-image-action)
    1. [list-image-actions](src/image/README.md#list-image-actions)
    1. [list-images](src/image/README.md#list-images)
    1. [transfer-image](src/image/README.md#transfer-image)
    1. [update-image](src/image/README.md#update-image)
1. [kubernetes](src/kubernetes/README.md#kubernetes)
    1. [add-container-registry](src/kubernetes/README.md#add-container-registry)
    1. [create-kubernetes-cluster](src/kubernetes/README.md#create-kubernetes-cluster)
    1. [create-node-pool](src/kubernetes/README.md#create-node-pool)
    1. [delete-kubernetes-cluster](src/kubernetes/README.md#delete-kubernetes-cluster)
    1. [delete-node-pool](src/kubernetes/README.md#delete-node-pool)
    1. [delete-node](src/kubernetes/README.md#delete-node)
    1. [get-clusterlint-diagnostics](src/kubernetes/README.md#get-clusterlint-diagnostics)
    1. [get-kubernetes-cluster-credentials](src/kubernetes/README.md#get-kubernetes-cluster-credentials)
    1. [get-kubernetes-cluster-kubeconfig](src/kubernetes/README.md#get-kubernetes-cluster-kubeconfig)
    1. [get-kubernetes-cluster](src/kubernetes/README.md#get-kubernetes-cluster)
    1. [get-node-pool](src/kubernetes/README.md#get-node-pool)
    1. [list-available-options-of-kubernetes](src/kubernetes/README.md#list-available-options-of-kubernetes)
    1. [list-kubernetes-cluster-available-upgrades](src/kubernetes/README.md#list-kubernetes-cluster-available-upgrades)
    1. [list-kubernetes-clusters](src/kubernetes/README.md#list-kubernetes-clusters)
    1. [list-node-pools](src/kubernetes/README.md#list-node-pools)
    1. [remove-container-registry](src/kubernetes/README.md#remove-container-registry)
    1. [run-clusterlint-on-kubernetes-cluster](src/kubernetes/README.md#run-clusterlint-on-kubernetes-cluster)
    1. [update-kubernetes-cluster](src/kubernetes/README.md#update-kubernetes-cluster)
    1. [update-node-pool](src/kubernetes/README.md#update-node-pool)
    1. [upgrade-kubernetes-cluster](src/kubernetes/README.md#upgrade-kubernetes-cluster)
1. [load-balancer](src/load-balancer/README.md#load-balancer)
    1. [add-droplets-to-load-balancer](src/load-balancer/README.md#add-droplets-to-load-balancer)
    1. [add-rules-to-load-balancer](src/load-balancer/README.md#add-rules-to-load-balancer)
    1. [create-load-balancer](src/load-balancer/README.md#create-load-balancer)
    1. [delete-load-balancer](src/load-balancer/README.md#delete-load-balancer)
    1. [get-load-balancer](src/load-balancer/README.md#get-load-balancer)
    1. [list-load-balancers](src/load-balancer/README.md#list-load-balancers)
    1. [remove-droplets-from-load-balancer](src/load-balancer/README.md#remove-droplets-from-load-balancer)
    1. [remove-rules-from-load-balancer](src/load-balancer/README.md#remove-rules-from-load-balancer)
    1. [update-load-balancer](src/load-balancer/README.md#update-load-balancer)
1. [monitoring](src/monitoring/README.md#monitoring)
    1. [get-droplet-available-memory-metrics](src/monitoring/README.md#get-droplet-available-memory-metrics)
    1. [get-droplet-bandwidth-metrics](src/monitoring/README.md#get-droplet-bandwidth-metrics)
    1. [get-droplet-cpu-metrics](src/monitoring/README.md#get-droplet-cpu-metrics)
    1. [get-droplet-free-memory-metrics](src/monitoring/README.md#get-droplet-free-memory-metrics)
    1. [get-droplet-total-memory-metrics](src/monitoring/README.md#get-droplet-total-memory-metrics)
1. [project](src/project/README.md#project)
    1. [assign-resources-to-default-project](src/project/README.md#assign-resources-to-default-project)
    1. [assign-resources-to-project](src/project/README.md#assign-resources-to-project)
    1. [create-project](src/project/README.md#create-project)
    1. [delete-project](src/project/README.md#delete-project)
    1. [get-default-project](src/project/README.md#get-default-project)
    1. [get-project](src/project/README.md#get-project)
    1. [list-default-project-resources](src/project/README.md#list-default-project-resources)
    1. [list-project-resources](src/project/README.md#list-project-resources)
    1. [list-projects](src/project/README.md#list-projects)
    1. [patch-default-project](src/project/README.md#patch-default-project)
    1. [patch-project](src/project/README.md#patch-project)
    1. [update-default-project](src/project/README.md#update-default-project)
    1. [update-project](src/project/README.md#update-project)
1. [region](src/region/README.md#region)
    1. [list-regions](src/region/README.md#list-regions)
1. [size](src/size/README.md#size)
    1. [list-sizes](src/size/README.md#list-sizes)
1. [snapshot](src/snapshot/README.md#snapshot)
    1. [delete-snapshot](src/snapshot/README.md#delete-snapshot)
    1. [get-snapshot](src/snapshot/README.md#get-snapshot)
    1. [list-snapshots](src/snapshot/README.md#list-snapshots)
1. [ssh-key](src/ssh-key/README.md#ssh-key)
    1. [create-ssh-key](src/ssh-key/README.md#create-ssh-key)
    1. [destroy-ssh-key](src/ssh-key/README.md#destroy-ssh-key)
    1. [get-ssh-key](src/ssh-key/README.md#get-ssh-key)
    1. [list-ssh-keys](src/ssh-key/README.md#list-ssh-keys)
    1. [update-ssh-key](src/ssh-key/README.md#update-ssh-key)
1. [tag](src/tag/README.md#tag)
    1. [create-tag](src/tag/README.md#create-tag)
    1. [delete-tag](src/tag/README.md#delete-tag)
    1. [get-tag](src/tag/README.md#get-tag)
    1. [list-tags](src/tag/README.md#list-tags)
    1. [tag-resources](src/tag/README.md#tag-resources)
    1. [untag-resources](src/tag/README.md#untag-resources)
1. [volume](src/volume/README.md#volume)
    1. [attach-volume-to-droplet](src/volume/README.md#attach-volume-to-droplet)
    1. [create-volume](src/volume/README.md#create-volume)
    1. [create-volume-snapshot](src/volume/README.md#create-volume-snapshot)
    1. [delete-volume-by-name](src/volume/README.md#delete-volume-by-name)
    1. [delete-volume](src/volume/README.md#delete-volume)
    1. [detach-volume-from-droplet](src/volume/README.md#detach-volume-from-droplet)
    1. [get-volume](src/volume/README.md#get-volume)
    1. [get-volume-action](src/volume/README.md#get-volume-action)
    1. [list-volume-actions](src/volume/README.md#list-volume-actions)
    1. [list-volumes](src/volume/README.md#list-volumes)
    1. [list-volume-snapshots](src/volume/README.md#list-volume-snapshots)
    1. [resize-volume](src/volume/README.md#resize-volume)
1. [vpc](src/vpc/README.md#vpc)
    1. [create-vpc](src/vpc/README.md#create-vpc)
    1. [get-vpc](src/vpc/README.md#get-vpc)
    1. [list-vpcs](src/vpc/README.md#list-vpcs)
    1. [update-vpc](src/vpc/README.md#update-vpc)
    1. [list-vpc-resources](src/vpc/README.md#list-vpc-resources)
    1. [delete-vpc](src/vpc/README.md#delete-vpc)

## contributors


<a href="https://github.com/navanjr" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/753288?v=3" width="80" height="80">
</a>
<a href="https://github.com/digipigeon" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/409141?v=3" width="80" height="80">
</a>
<a href="https://github.com/AhmedElywa" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/4535142?v=3" width="80" height="80">
</a>
<a href="https://github.com/mueschm" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/532523?v=3" width="80" height="80">
</a>
<a href="https://github.com/kkhanhluu" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/38130967?v=3" width="80" height="80">
</a>
<a href="https://github.com/carlosbaraza" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/1270425?v=3" width="80" height="80">
</a>
<a href="https://github.com/codyogden" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/11383626?v=3" width="80" height="80">
</a>
<a href="https://github.com/rijkvanzanten" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/9141017?v=3" width="80" height="80">
</a>
<a href="https://github.com/FreakyTurtle" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/8461972?v=3" width="80" height="80">
</a>
<a href="https://github.com/Aitthi" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/26670680?v=3" width="80" height="80">
</a>
<a href="https://github.com/Cosmic-Goat" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/13304815?v=3" width="80" height="80">
</a>

## license: [mit](LICENSE)
