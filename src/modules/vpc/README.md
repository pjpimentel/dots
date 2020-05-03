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
