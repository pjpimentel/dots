# database

## create-database-cluster
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-new-database-cluster)
```javascript
try {
  const input = {
    name: '', // string;
    engine: '', // string
    version: '', // string
    size: '', // string
    region: '' // string
    num_nodes: 0, // number
    tags: [''], // string[]
  };
  const {data:{database}} = await dots.database.createDatabaseCluster(input);
  console.log(database);
} catch (error) {
  console.log(error);
}
```

## get-database-cluster
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-database-cluster)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
  };
  const {data:{database}} = await dots.database.getDatabaseCluster(input);
  console.log(database);
} catch (error) {
  console.log(error);
}
```

## list-database-clusters
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-database-clusters)
```javascript
try {
  const input = {
    page: 1, // number
    per_page: 25, // number
  };
  const {data:{databases}} = await dots.database.listDatabaseClusters(input);
  console.log(databases);
} catch (error) {
  console.log(error);
}
```

## resize-database-cluster
[original documentation](https://developers.digitalocean.com/documentation/v2/#resize-a-database-cluster)
```javascript
try {
  const input = {
    size: '', // string
    num_nodes: 0, // number
    database_cluster_id: '', // string
  };
  const {status} = await dots.database.resizeDatabaseCluster(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```
