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
