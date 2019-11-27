# load-balancer

## add-droplets-to-load-balancer
[original documentation](https://developers.digitalocean.com/documentation/v2/#add-droplets-to-a-load-balancer)

```javascript
try {
  const input = {
    droplet_ids: [123], // number[]
    load_balancer_id: 'load-balander-id', // string;
  };
  const {status} = await dots.loadBalancer.addDropletsToLoadBalancer(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```
## add-rules-to-load-balancer
[original documentation](https://developers.digitalocean.com/documentation/v2/#add-forwarding-rules-to-a-load-balancer)

```javascript
try {
  const input = {
    forwarding_rules: [{...}], // IForwardingRule[]
    load_balancer_id: 'load-balancer-id', // string;
  };
  const {status} = await dots.loadBalancer.addRulesToLoadBalancer(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```
## create-load-balancer
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-new-load-balancer)

```javascript
try {
  const input = {
    algorithm: '', // string
    droplet_ids: [123], // number[]
    enable_proxy_protocol: true, // boolean
    forwarding_rules: [{...}], // IForwardingRule[]
    health_check: {}, // IHealthCheck
    name: 'lb-name', // string
    redirect_http_to_https: true, // boolean
    region: 'nyc1', // string
    sticky_sessions: true, // boolean
  };
  const {data:{load_balancer}} = await dots.loadBalancer.createLoadBalancer(input);
  console.log(load_balancer);
} catch (error) {
  console.log(error);
}
```
## delete-load-balancer
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-load-balancer)

```javascript
try {
  const input = {
    load_balancer_id: 'load-balancer-id', // string
  };
  const {status} = await dots.loadBalancer.deleteLoadBalancer(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```
## get-load-balancer
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-load-balancer)

```javascript
try {
  const input = {
    load_balancer_id: 'load-balancer-id', // string
  };
  const {data:{load_balancer}} = await dots.loadBalancer.getLoadBalancer(input);
  console.log(load_balancer);
} catch (error) {
  console.log(error);
}
```
## list-load-balancers
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-load-balancers)

```javascript
try {
  const input = {
    page: 1, // number
  };
  const {data:{load_balancers}} = await dots.loadBalancer.listLoadBalancers(input);
  console.log(load_balancers);
} catch (error) {
  console.log(error);
}
```
## remove-droplets-from-load-balancer
[original documentation](https://developers.digitalocean.com/documentation/v2/#remove-droplets-from-a-load-balancer)

```javascript
try {
  const input = {
    droplet_ids: [123], // number[]
    load_balancer_id: 'load-balander-id', // string;
  };
  const {status} = await dots.loadBalancer.removeDropletsFromLoadBalancer(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```
## remove-rules-from-load-balancer
[original documentation](https://developers.digitalocean.com/documentation/v2/#remove-forwarding-rules-from-a-load-balancer)

```javascript
try {
  const input = {
    forwarding_rules: [{...}], // IForwardingRule[]
    load_balancer_id: 'load-balancer-id', // string;
  };
  const {status} = await dots.loadBalancer.removeRulesFromLoadBalancer(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```
## update-load-balancer
[original documentation](https://developers.digitalocean.com/documentation/v2/#update-a-load-balancer)

```javascript
try {
  const input = {
    load_balancer_id: 'load-balancer-id', // string;
    algorithm: '', // string
    droplet_ids: [123], // number[]
    enable_proxy_protocol: true, // boolean
    forwarding_rules: [{...}], // IForwardingRule[]
    health_check: {}, // IHealthCheck
    name: 'lb-name', // string
    redirect_http_to_https: true, // boolean
    region: 'nyc1', // string
    sticky_sessions: true, // boolean
  };
  const {data:{load_balancer}} = await dots.loadBalancer.updateLoadBalancer(input);
  console.log(load_balancer);
} catch (error) {
  console.log(error);
}
```
