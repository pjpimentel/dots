# monitoring

## get-droplet-available-memory-metrics
[original documentation](https://docs.digitalocean.com/reference/api/api-reference/#operation/get_droplet_memory_available_metrics)
```javascript
try {
  const input = {
    end: "", // string
    host_id: "", // string
    start: "", // string
  };
  const {data:{data}} = await dots.monitoring.getDropletAvailableMemoryMetrics(input)
  console.log(data);
} catch (error) {
  console.log(error);
}
```

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
    end: "", // string
    host_id: "", // string
    start: "", // string
  };
  const {data:{data}} = await dots.monitoring.getDropletCpuMetrics(input)
  console.log(data);
} catch (error) {
  console.log(error);
}
```

## get-droplet-free-memory-metrics
[original documentation](https://docs.digitalocean.com/reference/api/api-reference/#operation/get_droplet_memory_free_metrics)
```javascript
try {
  const input = {
    end: "", // string
    host_id: "", // string
    start: "", // string
  };
  const {data:{data}} = await dots.monitoring.getDropletFreeMemoryMetrics(input)
  console.log(data);
} catch (error) {
  console.log(error);
}
```

## get-droplet-total-memory-metrics
[original documentation](https://docs.digitalocean.com/reference/api/api-reference/#operation/get_droplet_memory_total_metrics)
```javascript
try {
  const input = {
    end: "", // string
    host_id: "", // string
    start: "", // string
  };
  const {data:{data}} = await dots.monitoring.getDropletTotalMemoryMetrics(input)
  console.log(data);
} catch (error) {
  console.log(error);
}
```
