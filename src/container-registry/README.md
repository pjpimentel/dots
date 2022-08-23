# container-registry

## configure-registry
[original documentation](https://developers.digitalocean.com/documentation/v2/#configure-container-registry)
```javascript
try {
  const input = {
    name: '', // string
  };
  const {data:{registry}} = await dots.containerRegistry.configureRegistry(input)
  console.log(registry);
} catch (error) {
  console.log(error);
}
```

## get-registry
[original documentation](https://developers.digitalocean.com/documentation/v2/#get-container-registry-information)
```javascript
try {
  const {data:{registry}} = await dots.containerRegistry.getRegistry(input)
  console.log(registry);
} catch (error) {
  console.log(error);
}
```

## get-docker-credentials
[original documentation](https://developers.digitalocean.com/documentation/v2/#get-docker-credentials-for-container-registry)
```javascript
try {
  const input = {
    can_write: false, // boolean
    expiry_seconds: 0, // number
  };
  const {data:credentials} = await dots.containerRegistry.getDockerCredentials(input)
  console.log(credentials);
} catch (error) {
  console.log(error);
}
```

## delete-registry
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-container-registry)
```javascript
try {
  const {status} = await dots.containerRegistry.deleteRegistry();
  console.log(status);
} catch (error) {
  console.log(error);
}
```
