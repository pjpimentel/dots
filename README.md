# dots

**Digital Ocean** API **V2** wrapper. **TypeScript** - **Javascript**

Not tested in production.
## Install
``` bash
    npm install --save dots
```
## Usage
Typescript
``` typescript
    import DigitalOcean from 'dots';
    const myApiToken = 'my-long-token';
    const digitalOcean = new DigitalOcean(myApiToken);

    async function main(){
        try{
            let account = await digitalOcean.Account.get();
            console.log(account);
        } catch(e){
            console.log(e.message);
        }
    }

    main();
```
Javascript - Nodejs
``` javascript
    const DigitalOcean = require('dots');
    const myApiToken = 'my-long-token';
    const digitalOcean = new DigitalOcean(myApiToken);

    digitalOcean.Account.get()
        .then(account => console.log(account))
        .catch(e => console.log(e.message));
```
## Docs
* [Account](lib/account/README.md)
* [Action](lib/action/README.md)
* [Volume](lib/volume/README.md)
* [Certificate](lib/certificate/README.md)
* [Domain](lib/domain/README.md)
* [DomainRecord](lib/domainRecord/README.md)
* [Droplet](lib/droplet/README.md)
* [Image](lib/image/README.md)
* [LoadBalancer](lib/loadBalancer/README.md)
* [Snapshot](lib/snapshot/README.md)
* [SSHKeys](lib/sshkey/README.md)
* [Region](lib/region/README.md)
* [Size](lib/size/README.md)
* [FloatingIP](lib/floatingIP/README.md)
* [Tag](lib/tag/README.md)

## MAP
Map with [DO Official API](https://developers.digitalocean.com/documentation/v2/);

key = DO Endpoint

value = {module}.{action}

**All endpoints without values are not implemented yet**

``` json
{
    "Account": {
        "Get User Information": "Account.get"
    },
    "Actions": {
        "List all Actions": "Action.list",
        "Retrieve an existing Action": "Action.get"
    },
    "Block Storage": {
        "List all volumes": "Volume.list",
        "Create a new volume": "Volume.create",
        "Retrieve an existing volume": "Volume.get",
        "Retrieve an existing volume by name": "Volume.listByName",
        "List snapshots for a volume": "Volume.listSnapshots",
        "Create a snapshot from a volume": "Volume.createSnapshot",
        "Delete a volume": "Volume.delete",
        "Delete a volume by name": "Volume.delete"
    },
    "Block Storage Actions": {
        "Attach a volume to a Droplet": "Volume.attach",
        "Attach a volume to a Droplet by name": "Volume.attach",
        "Remove a volume from a Droplet": "Volume.detach",
        "Remove a volume from a Droplet by name": "Volume.detach",
        "Resize a volume": "Volume.resize",
        "List all actions for a volume": "Volume.listActions",
        "Retrieve an existing volume action": "Volume.getActionById"
    },
    "Certificates": {
        "Create a new Certificates": "",
        "List all Certificates": "",
        "Retrieve an existing Certificates": "",
        "Delete a Certificates": ""
    },
    "Domains": {
        "List all Domains": "",
        "Create a new Domain": "",
        "Retrieve an existing Domain": "",
        "Delete a Domain": ""
    },
    "Domain Records": {
        "List all Domain Records": "",
        "Create a new Domain Record": "",
        "Retrieve an existing Domain Record": "",
        "Update a Domain Record": "",
        "Delete a Domain Record": ""
    },
    "Droplets": {
        "Create a new Droplet": "Droplet.create",
        "Create multiple Droplets": "",
        "Retrieve an existing Droplet by id": "Droplet.get",
        "List all Droplets": "Droplet.list",
        "Listing Droplets by Tag": "Droplet.list",
        "List all available Kernels for a Droplet": "",
        "List snapshots for a Droplet": "Droplet.listImages",
        "List backups for a Droplet": "Droplet.listImages",
        "List actions for a Droplet": "",
        "Delete a Droplet": "Droplet.delete",
        "Deleting Droplets by Tag": "Droplet.delete",
        "List Neighbors for a Droplet": "Droplet.listNeighborsByDropletId",
        "List all Droplet Neighbors": "Droplet.listNeighbors"
    },
    "Droplet Actions": {
        "Enable Backups": "Droplet.enableBackups",
        "Disable Backups": "Droplet.disableBackups",
        "Reboot a Droplet": "Droplet.reboot",
        "Power Cycle a Droplet": "Droplet.powerCycle",
        "Shutdown a Droplet": "Droplet.shutdown",
        "Power Off a Droplet": "Droplet.powerOff",
        "Power On a Droplet": "Droplet.powerOn",
        "Restore a Droplet": "Droplet.restore",
        "Password Reset a Droplet": "Droplet.passwordReset",
        "Resize a Droplet": "Droplet.resize",
        "Rebuild a Droplet": "Droplet.rebuild",
        "Rename a Droplet": "Droplet.rename",
        "Change the Kernel": "Droplet.changeKernel",
        "Enable IPv6": "Droplet.enableIPv6",
        "Enable Private Networking": "Droplet.enablePrivateNetworking",
        "Snapshot a Droplet": "Droplet.createSnapshot",
        "Acting on Tagged Droplets": "",
        "Retrieve a Droplet Action": "Droplet.getActionById"
    },
    "Images": {
        "List all Images": "Image.list",
        "List all Distribution Images": "Image.list",
        "List all Application Images": "Image.list",
        "List a User's Images": "Image.listPrivate",
        "List all actions for an image": "Image.listActions",
        "Retrieve an existing Image by id": "Image.get",
        "Retrieve an existing Image by slug": "Image.get",
        "Update an Image": "Image.update",
        "Delete an Image": "Image.delete"
    },
    "Image Actions": {
        "Transfer an Image": "Image.transfer",
        "Convert an Image to a Snapshot": "Image.convertToSnapshot",
        "Retrieve an existing Image Action": "Image.getActionById"
    },
    "Load Balancers": {
        "Create a new Load Balancer": "",
        "Create a new Load Balancer with Droplet tag": "",
        "Retrieve an existing Load Balancer": "",
        "List all Load Balancers": "",
        "Update a Load Balancer": "",
        "Delete a Load Balancer": "",
        "Add Droplets to a Load Balancer": "",
        "Remove Droplets from a Load Balancer": "",
        "Add forwarding rules to a Load Balancer": "",
        "Remove forwarding rules to a Load Balancer": ""
    },
    "Snapshots": {
        "List all snapshots": "Snapshot.list",
        "List all Droplet snapshots": "Snapshot.list",
        "List all volume snapshots": "Snapshot.list",
        "Retrieve an existing snapshot by id": "Snapshot.get",
        "Delete a snapshot": "Snapshot.delete"
    },
    "SSH Keys": {
        "List all Keys": "SSHKey.list",
        "Create a new Key": "SSHKey.create",
        "Retrieve an existing Key": "SSHKey.get",
        "Update a Key": "SSHKey.update",
        "Destroy a Key": "SSHKey.delete"
    },
    "Regions": {
        "List all Regions": "Region.list"
    },
    "Sizes": {
        "List all Sizes": "Size.list"
    },
    "Floating IPs": {
        "List all Floating IPs": "",
        "Create a new Floating IP assigned to a Droplet": "",
        "Create a new Floating IP reserved to a Region": "",
        "Retrieve an existing Floating IP": "",
        "Delete a Floating IP": ""
    },
    "Floating IP Actions": {
        "Assign a Floating IP to a Droplet": "",
        "Unassign a Floating IP": "",
        "List all actions for a Floating IP": "",
        "Retrieve an existing Floating IP Action": ""
    },
    "Tags": {
        "Create a new Tag": "Tag.create",
        "Retrieve a Tag": "Tag.get",
        "List all Tags": "Tag.list",
        "Tag a Resource": "Tag.tagResource",
        "Untag a Resource": "Tag.untagResource",
        "Delete a Tag": "Tag.delete"
    }
}
```

## License: [MIT](LICENSE)

## TODO

Compile to Browser usage.