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

## list-database-options
[original documentation](https://docs.digitalocean.com/reference/api/kafka-beta-api-reference/#operation/databases_list_options)
```javascript
try {
  const {data:{options}} = await dots.database.listDatabaseOptions();
  console.log(options);
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
  const {data:{database}} = await dots.database.restoreDatabaseClusterBackup(input);
  console.log(database);
} catch (error) {
  console.log(error);
}
```

## destroy-database-cluster
[original documentation](https://developers.digitalocean.com/documentation/v2/#destroy-a-database-cluster)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
  };
  const {status} = await dots.database.destroyDatabaseCluster(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## create-read-only-replica
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-read-only-replica)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    name: '', // string
    region: '', // string
    size: '', // string
  };
  const {data:{replica}} = await dots.database.createReadOnlyReplica(input);
  console.log(replica);
} catch (error) {
  console.log(error);
}
```

## get-read-only-replica
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-read-only-replica)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    read_only_replica_name: '', // string
  };
  const {data:{replica}} = await dots.database.getReadOnlyReplica(input);
  console.log(replica);
} catch (error) {
  console.log(error);
}
```

## list-read-only-replicas
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-read-only-replicas)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    page: 1, // number
    per_page: 25, // number
  };
  const {data:{replicas}} = await dots.database.listReadOnlyReplicas(input);
  console.log(replicas);
} catch (error) {
  console.log(error);
}
```

## destroy-read-only-replica
[original documentation](https://developers.digitalocean.com/documentation/v2/#destroy-a-read-only-replica)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    read_only_replica_name: '', // string
  };
  const {status} = await dots.database.destroyReadOnlyReplica(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## create-database-cluster-user
[original documentation](https://developers.digitalocean.com/documentation/v2/#add-a-database-user)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    user_name: '', // string
  };
  const {data:{user}} = await dots.database.createDatabaseClusterUser(input);
  console.log(user);
} catch (error) {
  console.log(error);
}
```

## get-database-cluster-user
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-database-user)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    user_name: '', // string
  };
  const {data:{user}} = await dots.database.getDatabaseClusterUser(input);
  console.log(user);
} catch (error) {
  console.log(error);
}
```

## list-database-cluster-users
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-database-users)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    page: 1, // number
    per_page: 25, // number
  };
  const {data:{users}} = await dots.database.listDatabaseClusterUsers(input);
  console.log(users);
} catch (error) {
  console.log(error);
}
```

## remove-database-cluster-user
[original documentation](https://developers.digitalocean.com/documentation/v2/#remove-a-database-user)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    user_name: '', // string
  };
  const {status} = await dots.database.removeDatabaseClusterUser(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## create-database-cluster-db
[original documentation](https://developers.digitalocean.com/documentation/v2/#add-a-new-database)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    db_name: '', // string
  };
  const {data:{db}} = await dots.database.createDatabaseClusterDb(input);
  console.log(db);
} catch (error) {
  console.log(error);
}
```

## get-database-cluster-db
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-database)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    db_name: '', // string
  };
  const {data:{db}} = await dots.database.getDatabaseClusterDb(input);
  console.log(db);
} catch (error) {
  console.log(error);
}
```

## list-database-cluster-dbs
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-databases)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    page: 1, // number
    per_page: 25, // number
  };
  const {data:{dbs}} = await dots.database.listDatabaseClusterDbs(input);
  console.log(dbs);
} catch (error) {
  console.log(error);
}
```

## delete-database-cluster-db
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-database)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    db_name: '', // string
  };
  const {status} = await dots.database.deleteDatabaseClusterDb(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## create-connection-pool
[original documentation](https://developers.digitalocean.com/documentation/v2/#add-a-new-connection-pool)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    db_name: '', // string
    mode: '', // string
    pool_name: '', // string
    size: 0, // number
    user_name: '', // string
  };
  const {data:{pool}} = await dots.database.createConnectionPool(input);
  console.log(pool);
} catch (error) {
  console.log(error);
}
```

## list-connection-pools
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-connection-pool)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    page: 1, // number
    per_page: 25, // number
  };
  const {data:{pools}} = await dots.database.listConnectionPools(input);
  console.log(pools);
} catch (error) {
  console.log(error);
}
```

## get-connection-pool
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-database)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    pool_name: '', // string
  };
  const {data:{pool}} = await dots.database.getConnectionPool(input);
  console.log(pool);
} catch (error) {
  console.log(error);
}
```

## delete-connection-pool
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-connection-pool)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    pool_name: '', // string
  };
  const {status} = await dots.database.deleteConnectionPool(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## get-database-cluster-eviction-policy
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-the-eviction-policy-for-a-redis-cluster)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
  };
  const {data:{eviction_policy}} = await dots.database.getDatabaseClusterEvictionPolicy(input);
  console.log(eviction_policy);
} catch (error) {
  console.log(error);
}
```

## configure-database-cluster-eviction-policy
[original documentation](https://developers.digitalocean.com/documentation/v2/#configure-the-eviction-policy-for-a-redis-cluster)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    eviction_policy: '', // string
  };
  const {status} = await dots.database.configureDatabaseClusterEvictionPolicy(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## get-database-cluster-sql-mode
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-the-sql-modes-for-a-mysql-cluster)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
  };
  const {data:{sql_mode}} = await dots.database.getDatabaseClusterSqlMode(input);
  console.log(sql_mode);
} catch (error) {
  console.log(error);
}
```

## configure-database-cluster-sql-modes
[original documentation](https://developers.digitalocean.com/documentation/v2/#configure-the-sql-modes-for-a-mysql-cluster)
```javascript
try {
  const input = {
    database_cluster_id: '', // string
    sql_mode: '', // string
  };
  const {status} = await dots.database.configureDatabaseClusterSqlModes(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```
