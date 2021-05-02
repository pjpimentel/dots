# volume

## attach-volume-to-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#attach-a-block-storage-volume-to-a-droplet)
```javascript
try {
  const input = {
    droplet_id: 123, // number
    volume_id: '', // string
    region: '', // string?;
  };
  const {data:{action}} = await dots.volume.attachVolumeToDroplet(input)
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## create-volume
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-new-block-storage-volume)
```javascript
try {
  const input = {
    description: '', // string?
    filesystem_label: '', // string?
    filesystem_type: '', // 'ext4' | 'xfs' | string?
    name: '', // string
    region: '', // string
    size_gigabytes: 1, // number
    snapshot_id: '', // string?
    tags: ['']// string[]?
  };
  const {data:{volume}} = await dots.volume.createVolume(input)
  console.log(volume);
} catch (error) {
  console.log(error);
}
```

## create-volume-snapshot
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-snapshot-from-a-volume)
```javascript
try {
  const input = {
    volume_id: '', // string
    name: '', // string
    tags: [''], // string[]?
  };
  const {data:{snapshot}} = await dots.volume.createVolumeSnapshot(input)
  console.log(snapshot);
} catch (error) {
  console.log(error);
}
```

## delete-volume
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-block-storage-volume)
```javascript
try {
  const input = {
    volume_id: '', // string
  };
  const {status} = await dots.volume.deleteVolume(input)
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## delete-volume-by-name
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-block-storage-volume-by-name)
```javascript
try {
  const input = {
    volume_name: '', // string
    region: '', // string
  };
  const {status} = await dots.volume.deleteVolumeByName(input)
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## detach-volume-from-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#remove-a-block-storage-volume-from-a-droplet)
```javascript
try {
  const input = {
    droplet_id: 123, // number
    volume_id: '', // string
    region: '', // string?;
  };
  const {data:{action}} = await dots.volume.detachVolumeFromDroplet(input)
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## get-volume
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-block-storage-volume)
```javascript
try {
  const input = {
    volume_id: '', // string
  };
  const {data:{volume}} = await dots.volume.getVolume(input)
  console.log(volume);
} catch (error) {
  console.log(error);
}
```

## get-volume-action
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-volume-action)
```javascript
try {
  const input = {
    volume_id: '', // string
    action_id: '', // string | number
  };
  const {data:{action}} = await dots.volume.getVolumeAction(input)
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## list-volume-actions
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-a-volume)
```javascript
try {
  const input = {
    page: 1, // number
    volume_id: '', // string
  };
  const {data:{actions}} = await dots.volume.listVolumeActions(input)
  console.log(actions);
} catch (error) {
  console.log(error);
}
```

## list-volumes
[original documentation¹](https://developers.digitalocean.com/documentation/v2/#list-all-block-storage-volumes)

[original documentation²](https://developers.digitalocean.com/documentation/v2/#list-block-storage-volumes-filtered-by-name)
```javascript
try {
  const input = {
    page: 1, // number
    name: '', // string?
  };
  const {data:{volumes}} = await dots.volume.listVolumes(input)
  console.log(volumes);
} catch (error) {
  console.log(error);
}
```

## list-volume-snapshots
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-snapshots-for-a-volume)
```javascript
try {
  const input = {
    page: 1, // number
    volume_id: '', // string
  };
  const {data:{snapshots}} = await dots.volume.listVolumeSnapshots(input)
  console.log(snapshots);
} catch (error) {
  console.log(error);
}
```

## resize-volume
[original documentation](https://developers.digitalocean.com/documentation/v2/#resize-a-volume)
```javascript
try {
  const input = {
    volume_id: '', // string
    region: '', // string?
    size_gigabytes: 1, // number
  };
  const {data:{action}} = await dots.volume.resizeVolume(input)
  console.log(action);
} catch (error) {
  console.log(error);
}
```
