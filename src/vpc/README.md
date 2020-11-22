# vpc

## create-vpc
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-new-vpc)
```javascript
try {
  const input = {
    description: '', // string
    ip_range: '', // string
    is_default: true, // bool
    name: '', // string
    region: '', // string
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
[original documentation](https://developers.digitalocean.com/documentation/v2/#partially-update-a-vpc)
```javascript
try {
  const input = {
    description: '', // string
    is_default: true, // bool
    name: '', // string
  };
  const {data:{vpc}} = await dots.vpc.updateVpc(input)
  console.log(vpc);
} catch (error) {
  console.log(error);
}
```

## list-vpc-resources
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-the-member-resources-of-a-vpc)
```javascript
try {
  const input = {
    page: 1, // number
    per_page: 25, // number
    vpc_id: '', // string
    resource_type: '', // string
  };
  const {data:{members}} = await dots.project.listVpcResources(input);
  console.log(members);
} catch (error) {
  console.log(error);
}
```

## delete-vpc
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-vpc)
```javascript
try {
  const input = {
    vpc_id: '', // string
  };
  const {status} = await dots.vpc.deleteVpc(input)
  console.log(status);
} catch (error) {
  console.log(error);
}
```
