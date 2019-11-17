# snapshot

## delete-snapshot
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-snapshot)
```javascript
try {
  const input = {
    id: 123, // number;
  };
  const {status} = await dots.snapshot.deleteSnapshot(input)
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## get-snapshot
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-snapshot-by-id)
```javascript
try {
  const input = {
    id: 123, // number;
  };
  const {data:{snapshot}} = await dots.snapshot.getSnapshot(input)
  console.log(snapshot);
} catch (error) {
  console.log(error);
}
```

## list-snapshots
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-snapshots)

[original documentation¹](https://developers.digitalocean.com/documentation/v2/#list-all-droplet-snapshots)

[original documentation²](https://developers.digitalocean.com/documentation/v2/#list-all-volume-snapshots)

```javascript
try {
  const input = {
    page: 1, // number
    resource_type: undefined, // undefined || 'droplet' | 'volume'
  };
  const {data:{snapshots}} = await dots.snapshot.listSnapshots(input)
  console.log(snapshots);
} catch (error) {
  console.log(error);
}
```

<!-- TODO: ref field `id` -> `snapshot_id` -->
