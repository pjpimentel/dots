# kubernetes

## create-kubernetes-cluster
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-new-kubernetes-cluster)
```javascript
try {
  const input = {
    name: '', // string
    region: '', // string
    version: '', // string
    auto_upgrade: true, // boolean
    tags: [], // string[]
    maintenance_policy: {}, // IKubernetesClusterMaintenancePolicy
    node_pools: [], // IKubernetesClusterNodePool[]
  };
  const {data:{kubernetes_cluster}} = await dots.kubernetes.createKubernetesCluster(input);
  console.log(kubernetes_cluster);
} catch (error) {
  console.log(error);
}
```

## get-kubernetes-cluster
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-kubernetes-cluster)
```javascript
try {
  const input = {
    kubernetes_cluster_id: '', // string
  };
  const {data:{kubernetes_cluster}} = await dots.kubernetes.getKubernetesCluster(input);
  console.log(kubernetes_cluster);
} catch (error) {
  console.log(error);
}
```

## list-kubernetes-clusters
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-kubernetes-clusters)
```javascript
try {
  const input = {
    page: 1, // number
    per_page: 25, // number
  };
  const {data:{kubernetes_clusters}} = await dots.kubernetes.listKubernetesClusters(input);
  console.log(kubernetes_clusters);
} catch (error) {
  console.log(error);
}
```

## update-kubernetes-cluster
[original documentation](https://developers.digitalocean.com/documentation/v2/#update-a-kubernetes-cluster)

```javascript
try {
  const input = {
    kubernetes_cluster_id: '', // string;
    name: '', // string
    auto_upgrade: true, // boolean
    tags: [], // string[]
    maintenance_policy: [{...}], // IKubernetesClusterMaintenancePolicy[]
  };
  const {data:{kubernetes_cluster}} = await dots.kubernetes.updateKubernetesCluster(input);
  console.log(kubernetes_cluster);
} catch (error) {
  console.log(error);
}
```

## list-kubernetes-cluster-available-upgrades
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-available-upgrades-for-an-existing-kubernetes-cluster)
```javascript
try {
  const input = {
    kubernetes_cluster_id: '', // string;
  };
  const {data:{available_upgrade_versions}} = await dots.kubernetes.listKubernetesClusterAvailableUpgrades(input);
  console.log(available_upgrade_versions);
} catch (error) {
  console.log(error);
}
```

## upgrade-kubernetes-cluster
[original documentation](https://developers.digitalocean.com/documentation/v2/#upgrade-a-kubernetes-cluster)

```javascript
try {
  const input = {
    kubernetes_cluster_id: '', // string;
    version: '', // string
  };
  const {status} = await dots.kubernetes.upgradeKubernetesCluster(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## delete-kubernetes-cluster
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-kubernetes-cluster)

```javascript
try {
  const input = {
    kubernetes_cluster_id: '', // string;
  };
  const {status} = await dots.kubernetes.deleteKubernetesCluster(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## get-kubernetes-cluster-kubeconfig
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-the-kubeconfig-for-a-kubernetes-cluster)
```javascript
try {
  const input = {
    kubernetes_cluster_id: '', // string
    expiration_in_seconds: 0, // number
  };
  const {data:kubeconfig} = await dots.kubernetes.getKubernetesClusterKubeconfig(input);
  console.log(kubeconfig);
} catch (error) {
  console.log(error);
}
```

## get-kubernetes-cluster-credentials
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-credentials-for-a-kubernetes-cluster)
```javascript
try {
  const input = {
    kubernetes_cluster_id: '', // string
    expiration_in_seconds: 0, // number
  };
  const {data:credentials} = await dots.kubernetes.getKubernetesClusterCredentials(input);
  console.log(credentials);
} catch (error) {
  console.log(error);
}
```

## get-node-pool
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-a-node-pool-for-a-kubernetes-cluster)
```javascript
try {
  const input = {
    kubernetes_cluster_id: '', // string
    node_pool_id: '', // string
  };
  const {data:{node_pool}} = await dots.kubernetes.getNodePool(input);
  console.log(node_pool);
} catch (error) {
  console.log(error);
}
```

## list-node-pools
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-node-pools-in-a-kubernetes-clusters)
```javascript
try {
  const input = {
    kubernetes_cluster_id: '', // string
    page: 1, // number
    per_page: 25, // number
  };
  const {data:{node_pools}} = await dots.kubernetes.listNodePools(input);
  console.log(node_pools);
} catch (error) {
  console.log(error);
}
```

## create-node-pool
[original documentation](https://developers.digitalocean.com/documentation/v2/#add-a-node-pool-to-a-kubernetes-cluster)
```javascript
try {
  const input = {
    kubernetes_cluster_id: '', // string
    size: 0, // number
    name: '', // string
    count: 0, // number,
    tags: [], // string[]
    auto_scale: true, // boolean
    min_nodes: 0, // number
    max_nodes: 0, // number
  };
  const {data:{node_pool}} = await dots.kubernetes.createNodePool(input);
  console.log(node_pool);
} catch (error) {
  console.log(error);
}
```

## update-node-pool
[original documentation](https://developers.digitalocean.com/documentation/v2/#update-a-node-pool-in-a-kubernetes-cluster)
```javascript
try {
  const input = {
    kubernetes_cluster_id: '', // string
    node_pool_id: '', // string
    name: '', // string
    count: 0, // number,
    tags: [], // string[]
    auto_scale: true, // boolean
    min_nodes: 0, // number
    max_nodes: 0, // number
  };
  const {data:{node_pool}} = await dots.kubernetes.updateNodePool(input);
  console.log(node_pool);
} catch (error) {
  console.log(error);
}
```

## delete-node-pool
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-node-pool-in-a-kubernetes-cluster)
```javascript
try {
  const input = {
    kubernetes_cluster_id: '', // string
    node_pool_id: '', // string
  };
  const {status} = await dots.kubernetes.deleteNodePool(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## delete-node
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-node-in-a-kubernetes-cluster)
```javascript
try {
  const input = {
    kubernetes_cluster_id: '', // string
    node_pool_id: '', // string
    node_id: '', // string
    drain_node: true, // boolean
    replace_node: false, // boolean
  };
  const {status} = await dots.kubernetes.deleteNodePool(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## run-clusterlint-on-kubernetes-cluster
[original documentation](https://developers.digitalocean.com/documentation/v2/#run-clusterlint-checks-on-a-kubernetes-cluster)
```javascript
try {
  const input = {
    kubernetes_cluster_id: '', // string
    include_groups: [], // string[]
    include_checks: [], // string[]
    exclude_groups: [], // string[]
    exclude_checks: [], // string[]
  };
  const {data:{run_id}} = await dots.kubernetes.runClusterlintOnKubernetesCluster(input);
  console.log(run_id);
} catch (error) {
  console.log(error);
}
```

## get-clusterlint-diagnostics
[original documentation](https://developers.digitalocean.com/documentation/v2/#fetch-clusterlint-diagnostics-for-a-kubernetes-cluster)
```javascript
try {
  const input = {
    kubernetes_cluster_id: '', // string
    run_id: '', // string
  };
  const {data:diagnostics} = await dots.kubernetes.getClusterlintDiagnostics(input);
  console.log(diagnostics);
} catch (error) {
  console.log(error);
}
```

## list-available-options-of-kubernetes
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-available-regions--node-sizes--and-versions-of-kubernetes)
```javascript
try {
  const {data:{options}} = await dots.kubernetes.listAvailableOptionsOfKubernetes();
  console.log(options);
} catch (error) {
  console.log(error);
}
```

## add-container-registry
[original documentation](https://developers.digitalocean.com/documentation/v2/#add-container-registry-to-kubernetes-clusters)
```javascript
try {
  const input = {
    cluster_uuids: [''], // string[]
  };
  const {status} = await dots.kubernetes.addContainerRegistry(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## remove-container-registry
[original documentation](https://developers.digitalocean.com/documentation/v2/#remove-container-registry-to-kubernetes-clusters)
```javascript
try {
  const input = {
    cluster_uuids: [''], // string[]
  };
  const {status} = await dots.kubernetes.removeContainerRegistry(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```
