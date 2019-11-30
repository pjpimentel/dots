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
