# size

## list-sizes
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-sizes)
```javascript
try {
  const input = {
    page: 1, // number
  };
  const {data:{sizes}} = await dots.size.listSizes(input)
  console.log(sizes);
} catch (error) {
  console.log(error);
}
```
