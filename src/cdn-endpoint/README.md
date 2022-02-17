# cdn-endpoint

## create-cdn-endpoint
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-new-cdn-endpoint)

```javascript
try {
  const input = {
    origin: '', // string
    ttl: 0, // number
    certificate_id: '', // string
    custom_domain: '', // string
  };
  const {data:{endpoint}} = await dots.cdnEndpoint.createCdnEndpoint(input);
  console.log(endpoint);
} catch (error) {
  console.log(error);
}
```

## get-cdn-endpoint
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-cdn-endpoint)

```javascript
try {
  const input = {
    cdn_endpoint_id: '', // string
  };
  const {data:{endpoint}} = await dots.cdnEndpoint.getCdnEndpoint(input);
  console.log(endpoint);
} catch (error) {
  console.log(error);
}
```

## list-cdn-endpoints
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-cdn-endpoints)
```javascript
try {
  const input = {
    page: 1, // number
    per_page: 100, // number
  };
  const {data:{endpoints}} = await dots.cdnEdnpoint.listCdnEndpoints(input);
  console.log(endpoints);
} catch (error) {
  console.log(error);
}
```

## delete-cdn-endpoint
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-cdn-endpoint)
```javascript
try {
  const input = {
    cdn_endpoint_id: '', // string
  };
  const {status} = await dots.cdnEdnpoint.deleteCdnEndpoint(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## update-cdn-endpoint
[original documentation](https://developers.digitalocean.com/documentation/v2/#update-an-existing-cdn-endpoint)

```javascript
try {
  const input = {
    cdn_endpoint_id: '', // string
    ttl: 0, // number
    certificate_id: '', // string
    custom_domain: '', // string
  };
  const {data:{endpoint}} = await dots.cdnEndpoint.updateCdnEndpoint(input);
  console.log(endpoint);
} catch (error) {
  console.log(error);
}
```

## purge-cache
[original documentation](https://developers.digitalocean.com/documentation/v2/#purge-the-cache-for-an-existing-cdn-endpoint)
```javascript
try {
  const input = {
    cdn_endpoint_id: '', // string
  };
  const {status} = await dots.cdnEdnpoint.purgeCache(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```
