# firewall

## add-droplets-to-firewall
[original documentation](https://developers.digitalocean.com/documentation/v2/#add-droplets-to-a-firewall)

```javascript
try {
  const input = {
    droplet_ids: [123,321], // number[]]
    firewall_id: 'firewall-id', // string
  };
  const {status} = await dots.firewall.addDropletsToFirewall(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## add-rules-to-firewall
[original documentation](https://developers.digitalocean.com/documentation/v2/#add-rules-to-a-firewall)

```javascript
try {
  const input = {
    firewall_id: 'firewall-id', // string;
    inbound_rules: [], // IFirewallInboundRule[];
    outbound_rules: [], // IFirewallOutboundRule[];
  };
  const {status} = await dots.firewall.addRulesToFirewall(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## add-tags-to-firewall
[original documentation](https://developers.digitalocean.com/documentation/v2/#add-tags-to-a-firewall)

```javascript
try {
  const input = {
    firewall_id: 'firewall-id', //string;
    tags: ['my-tag'], // string[];
  };
  const {status} = await dots.firewall.addTagsToFirewall(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## create-firewall
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-new-firewall)

```javascript
try {
  const input = {
    name: 'my firewall', // string
    inbound_rules: [], // IFirewallInboundRule[];
    outbound_rules: [], // IFirewallOutboundRule[];
    droplet_ids: [123], // number[]
  };
  const {data:{firewall}} = await dots.firewall.createFirewall(input);
  console.log(firewall);
} catch (error) {
  console.log(error);
}
```

## delete-firewall
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-firewall)

```javascript
try {
  const input = {
    firewall_id: 'firewall-id', // string
  };
  const {status} = await dots.firewall.deleteFirewall(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## get-firewall
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-firewall)

```javascript
try {
  const input = {
    firewall_id: 'firewall-id', // string
  };
  const {data:{firewall}} = await dots.firewall.getFirewall(input);
  console.log(firewall);
} catch (error) {
  console.log(error);
}
```

## list-firewalls
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-firewalls)

```javascript
try {
  const input = {
    per_page: 100, // number
  };
  const {data:{firewalls}} = await dots.firewall.listFirewalls(input);
  console.log(firewalls);
} catch (error) {
  console.log(error);
}
```

## remove-droplets-from-firewall
[original documentation](https://developers.digitalocean.com/documentation/v2/#remove-droplets-from-a-firewall)

```javascript
try {
  const input = {
    droplet_ids: [123,321], // number[]]
    firewall_id: 'firewall-id', // string
  };
  const {status} = await dots.firewall.removeDropletsFromFirewall(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## remove-rules-from-firewall
[original documentation](https://developers.digitalocean.com/documentation/v2/#remove-rules-from-a-firewall)

```javascript
try {
  const input = {
    firewall_id: 'firewall-id', // string;
    inbound_rules: [], // IFirewallInboundRule[];
    outbound_rules: [], // IFirewallOutboundRule[];
  };
  const {status} = await dots.firewall.removeRulesFromFirewall(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## remove-tags-from-firewall
[original documentation](https://developers.digitalocean.com/documentation/v2/#remove-tags-from-a-firewall)

```javascript
try {
  const input = {
    firewall_id: 'firewall-id', //string;
    tags: ['my-tag'], // string[];
  };
  const {status} = await dots.firewall.removeTagsFromFirewall(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## update-firewall
[original documentation](https://developers.digitalocean.com/documentation/v2/#update-a-firewall)

```javascript
try {
  const input = {
    id: 'firewall-id', // string
    name: 'my firewall', // string
    inbound_rules: [], // IFirewallInboundRule[];
    outbound_rules: [], // IFirewallOutboundRule[];
    droplet_ids: [123], // number[]
  };
  const {data:{firewall}} = await dots.firewall.updateFirewall(input);
  console.log(firewall);
} catch (error) {
  console.log(error);
}
```
