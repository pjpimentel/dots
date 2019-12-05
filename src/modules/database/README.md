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

## migrate-database-cluster
[original documentation](https://developers.digitalocean.com/documentation/v2/#migrate-a-database-cluster-to-a-new-region)
```javascript
try {
  const input = {
    region: '', // string
    database_cluster_id: '', // string
  };
  const {status} = await dots.database.migrateDatabaseCluster(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## update-database-cluster-firewall-rules
[original documentation](https://developers.digitalocean.com/documentation/v2/#update-firewall-rules--trusted-sources--for-a-database-cluster)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    rules: [], // IDatabaseClusterFirewallRule[]
  };
  const {status} = await dots.database.updateDatabaseClusterFirewallRules(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## list-database-cluster-firewall-rules
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-firewall-rules--trusted-sources--for-a-database-cluster)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    page: 1, // number
    per_page: 25, // number
  };
  const {data:{rules}} = await dots.database.listDatabaseClusterFirewallRules(input);
  console.log(rules);
} catch (error) {
  console.log(error);
}
```

## configure-database-cluster-maintenance-window
[original documentation](https://developers.digitalocean.com/documentation/v2/#configure-a-database-cluster-s-maintenance-window)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    day: '', // number
    hour: '', // number
  };
  const {status} = await dots.database.configureDatabaseClusterMaintenanceWindow(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## list-database-cluster-backups
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-database-cluster)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    page: 1, // number
    per_page: 25, // number
  };
  const {data:{backups}} = await dots.database.listDatabaseClusterBackups(input);
  console.log(backups);
} catch (error) {
  console.log(error);
}
```

## restore-database-cluster-backup
[original documentation](https://developers.digitalocean.com/documentation/v2/#restore-from-a-database-cluster-backup)
```javascript
try {
  const input = {
    name: '', // string
    backup_restore: {
      database_name: '', // string
      backup_created_at: '', // string
    },
    engine: '', // string
    version: '', // string
    region: '', // string
    size: '', // string
    num_nodes: 0, // number
  };
  const {data:{backups}} = await dots.database.restoreDatabaseClusterBackup(input);
  console.log(backups);
} catch (error) {
  console.log(error);
}
```
