# monitoring

## get-droplet-bandwidth-metrics
[original documentation](https://docs.digitalocean.com/reference/api/api-reference/#operation/get_droplet_bandwidth_metrics)
```javascript
try {
  const input = {
    host_id: "", // string
    start: "", // string
    end: "", // string
    interface: "", // string,
    direction: "", // string.
  };
  const {data:{data}} = await dots.monitoring.getDropletBandwidthMetrics(input)
  console.log(data);
} catch (error) {
  console.log(error);
}
```

## get-droplet-cpu-metrics
[original documentation](https://docs.digitalocean.com/reference/api/api-reference/#operation/get_droplet_cpu_metrics)
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
