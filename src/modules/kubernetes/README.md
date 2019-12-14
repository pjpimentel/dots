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
