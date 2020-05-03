# vpc

## create-vpc
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-new-vpc)
```javascript
try {
  const input = {
    name: '', // string
    region: '', // string
    ip_range: '', // string
    description: '', // string
  };
  const {data:{vpc}} = await dots.vpc.createVpc(input)
  console.log(vpc);
} catch (error) {
  console.log(error);
}
```

## get-vpc
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-vpc)
```javascript
try {
  const input = {
    vpc_id: '', // string
  };
  const {data:{vpc}} = await dots.vpc.getVpc(input)
  console.log(vpc);
} catch (error) {
  console.log(error);
}
```

## list-vpcs
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-vpcs)
```javascript
try {
  const input = {
    page: 1, // number
    per_page: 1, // mumber
  };
  const {data:{vpcs}} = await dots.vpc.listVpcs(input)
  console.log(vpcs);
} catch (error) {
  console.log(error);
}
```

## update-vpc
[original documentation](https://developers.digitalocean.com/documentation/v2/#update-a-vpc)
```javascript
try {
  const input = {
    name: '', // string
    description: '', // string
  };
  const {data:{vpc}} = await dots.vpc.updateVpc(input)
  console.log(vpc);
} catch (error) {
  console.log(error);
}
```
