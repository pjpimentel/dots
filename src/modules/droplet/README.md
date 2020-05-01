# droplet

## change-droplet-kernel
[original documentation](https://developers.digitalocean.com/documentation/v2/#change-the-kernel)

```javascript
try {
  const input = {
    droplet_id: 123, // number,
    kernel: 123, // number
  };
  const {data:{action}} = await dots.droplet.changeDropletKernel(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## create-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-new-droplet)

```javascript
try {
  const input = {
    name: "example.com", // string
    region: "nyc3", // string
    size: "s-1vcpu-1gb", // string
    image: "ubuntu-16-04-x64", // string
  };
  const {data:{droplet}} = await dots.droplet.createDroplet(input);
  console.log(droplet);
} catch (error) {
  console.log(error);
}
```

## create-droplets
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-multiple-droplets)

```javascript
try {
  const input = {
    names: ["sub-01.example.com", "sub-02.example.com"], // string[]
    region: "nyc3", // string
    size: "s-1vcpu-1gb", // string
    image: "ubuntu-16-04-x64", // string
  };
  const {data:{droplets}} = await dots.droplet.createDroplets(input);
  console.log(droplets);
} catch (error) {
  console.log(error);
}
```

## delete-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number
  };
  const {status} = await dots.droplet.deleteDroplet(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## delete-droplets-by-tag
[original documentation](https://developers.digitalocean.com/documentation/v2/#deleting-droplets-by-tag)

```javascript
try {
  const input = {
    tag_name: "tagName", // string
  };
  const {status} = await dots.droplet.deleteDropletsByTag(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## disable-droplet-backups
[original documentation](https://developers.digitalocean.com/documentation/v2/#disable-backups)

```javascript
try {
  const input = {
    droplet_id: 123, // number
  };
  const {data:{action}} = await dots.droplet.disableDropletBackups(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## do-action-by-droplet-tag
[original documentation](https://developers.digitalocean.com/documentation/v2/#acting-on-tagged-droplets)

```javascript
try {
  const input = {
    tag_name: 'my-tag', // string
    type: 'snapshot', // string
  };
  const {data:{actions}} = await dots.droplet.doActionByDropletTag(input);
  console.log(actions);
} catch (error) {
  console.log(error);
}
```

## enable-droplet-backups
[original documentation](https://developers.digitalocean.com/documentation/v2/#enable-backups)

```javascript
try {
  const input = {
    droplet_id: 123, // number
  };
  const {data:{action}} = await dots.droplet.enableDropletBackups(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## enable-droplet-ipv6
[original documentation](https://developers.digitalocean.com/documentation/v2/#enable-ipv6)

```javascript
try {
  const input = {
    droplet_id: 123, // number
  };
  const {data:{action}} = await dots.droplet.enableDropletIpv6(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## enable-droplet-private-networking
[original documentation](https://developers.digitalocean.com/documentation/v2/#enable-private-networking)

```javascript
try {
  const input = {
    droplet_id: 123, // number
  };
  const {data:{action}} = await dots.droplet.enableDropletPrivateNetworking(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## get-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-droplet-by-id)

```javascript
try {
  const input = {
    droplet_id: 123, // number
  };
  const {data:{droplet}} = await dots.droplet.getDroplet(input);
  console.log(droplet);
} catch (error) {
  console.log(error);
}
```

## get-droplet-action
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-a-droplet-action)

```javascript
try {
  const input = {
    action_droplet_id: 123, // number
    droplet_droplet_id: 123, // number
  };
  const {data:{action}} = await dots.droplet.getDropletAction(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## list-droplet-actions
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-actions-for-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number
    per_page: 100, // number
  };
  const {data:{actions}} = await dots.droplet.listDropletActions(input);
  console.log(actions);
} catch (error) {
  console.log(error);
}
```

## list-droplet-backups
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number
    per_page: 100, // number
  };
  const {data:{backups}} = await dots.droplet.listDropletBackups(input);
  console.log(backups);
} catch (error) {
  console.log(error);
}
```

## list-droplet-kernels
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-available-kernels-for-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number
    per_page: 100, // number
  };
  const {data:{kernels}} = await dots.droplet.listDropletKernels(input);
  console.log(kernels);
} catch (error) {
  console.log(error);
}
```

## list-droplet-neighborhoods
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-droplet-neighbors)

```javascript
try {
  const input = {};
  const {data:{neighbor_ids}} = await dots.droplet.listDropletNeighborhoods(input);
  console.log(neighbor_ids);
} catch (error) {
  console.log(error);
}
```

## list-droplet-neighbors
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-neighbors-for-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number
    per_page: 100, // number
  };
  const {data:{droplets}} = await dots.droplet.listDropletNeighbors(input);
  console.log(droplets);
} catch (error) {
  console.log(error);
}
```

## list-droplets
[original documentation¹](https://developers.digitalocean.com/documentation/v2/#list-all-droplets)

[original documentation²](https://developers.digitalocean.com/documentation/v2/#listing-droplets-by-tag)


```javascript
try {
  const input = {
    per_page: 100, // number
  };
  const {data:{droplets}} = await dots.droplet.listDroplets(input);
  console.log(droplets);
} catch (error) {
  console.log(error);
}
```

## list-droplet-snapshots
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-snapshots-for-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number
    per_page: 100, // number
  };
  const {data:{snapshots}} = await dots.droplet.listDropletSnapshots(input);
  console.log(snapshots);
} catch (error) {
  console.log(error);
}
```

## power-cycle-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#power-cycle-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number
  };
  const {data:{action}} = await dots.droplet.powerCycleDroplet(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## power-off-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#power-off-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number
  };
  const {data:{action}} = await dots.droplet.powerOffDroplet(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## power-on-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#power-on-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number
  };
  const {data:{action}} = await dots.droplet.powerOnDroplet(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## reboot-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#reboot-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number
  };
  const {data:{action}} = await dots.droplet.rebootDroplet(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## rebuild-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#rebuild-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number
    image: "new-image", // string
  };
  const {data:{action}} = await dots.droplet.rebuildDroplet(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## rename-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#rename-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number
    name: 'new-name', // string
  };
  const {data:{action}} = await dots.droplet.renameDroplet(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## reset-droplet-password
[original documentation](https://developers.digitalocean.com/documentation/v2/#password-reset-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number
  };
  const {data:{action}} = await dots.droplet.resetDropletPassword(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## resize-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#resize-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number
    type: "resize", // string
    size: "1gb", // string
  };
  const {data:{action}} = await dots.droplet.resizeDroplet(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## restore-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#restore-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // string,
    image: 123 // string|number,
  };
  const {data:{droplet}} = await dots.droplet.restoreDroplet(input);
  console.log(droplet);
} catch (error) {
  console.log(error);
}
```

## shutdown-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#shutdown-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number
  };
  const {data:{action}} = await dots.droplet.shutdownDroplet(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## snapshot-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#snapshot-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number
  };
  const {data:{action}} = await dots.droplet.snapshotDroplet(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```
