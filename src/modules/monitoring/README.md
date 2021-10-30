# monitoring

## get-droplet-cpu-metrics
[original documentation](https://docs.digitalocean.com/reference/api/api-reference/)
```javascript
try {
  const input = {
    host_id: "", // string
    start: "", // string
    end: "", // string
  };
  const {data:{data}} = await dots.monitoring.getDropletCpuMetrics(input)
  console.log(data);
} catch (error) {
  console.log(error);
}
```
