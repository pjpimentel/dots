# floating-ip

## assign-ip-to-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#assign-a-floating-ip-to-a-droplet)

```javascript
try {
  const input = {
    droplet_id: 123, // number,
    ip: '127.0.0.1', // string,
  };
  const {data:{action}} = await dots.floatingIp.assignIpToDroplet(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## create-floating-ip
[original documentation¹](https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet)
[original documentation²](https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-reserved-to-a-region)

```javascript
try {
  const input = {
    droplet_id: 123, // number
  };
  const {data:{floating_ip}} = await dots.floatingIp.createFloatingIp(input);
  console.log(floating_ip);
} catch (error) {
  console.log(error);
}
```

## delete-floating-ip
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-floating-ips)

```javascript
try {
  const input = {
    ip: '127.0.0.1', // string
  };
  const {status} = await dots.floatingIp.deleteFloatingIp(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## get-floating-ip
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip)

```javascript
try {
  const input = {
    ip: '127.0.0.1', // string
  };
  const {data:{floating_ip}} = await dots.floatingIp.getFloatingIp(input);
  console.log(floating_ip);
} catch (error) {
  console.log(error);
}
```

## get-floating-ip-action
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip-action)

```javascript
try {
  const input = {
    ip: '127.0.0.1', // string
    action_id: 'action-id', // string | number
  };
  const {data:{action}} = await dots.floatingIp.getFloatingIpAction(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## list-floating-ip-actions
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-a-floating-ip)

```javascript
try {
  const input = {
    ip: '127.0.0.1', // string
    per_page: 1, // number
  };
  const {data:{actions}} = await dots.floatingIp.listFloatingIpActions(input);
  console.log(actions);
} catch (error) {
  console.log(error);
}
```

## list-floating-ips
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-floating-ips)

```javascript
try {
  const input = {
    per_page: 123, // number
  };
  const {data:{floating_ips}} = await dots.floatingIp.listFloatingIps(input);
  console.log(floating_ips);
} catch (error) {
  console.log(error);
}
```

## unassign-ip-from-droplet
[original documentation](https://developers.digitalocean.com/documentation/v2/#unassign-a-floating-ip)

```javascript
try {
  const input = {
    ip: '127.0.0.1', // string,
  };
  const {data:{action}} = await dots.floatingIp.unassignIpFromDroplet(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```
