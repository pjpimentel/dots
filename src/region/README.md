# region

## list-regions
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-regions)
```javascript
try {
  const input = {
    page: 1, // number
  };
  const {data:{regions}} = await dots.region.listRegions(input)
  console.log(regions);
} catch (error) {
  console.log(error);
}
```
