# domain

## create-domain
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-new-domain)

```javascript
try {
  const input = {
    name: "pimentel.co", // string
    ip_address: "" // string
  };
  const {data:{domain}} = await dots.domain.createDomain(input);
  console.log(domain);
} catch (error) {
  console.log(error);
}
```

## delete-domain
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-domain)

```javascript
try {
  const input = {
    name: "pimentel.co", // string
  };
  const {status} = await dots.domain.deleteDomain(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## get-domain
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain)

```javascript
try {
  const input = {
    name: "pimentel.co", // string
  };
  const {data:{domain}} = await dots.domain.getDomain(input);
  console.log(domain);
} catch (error) {
  console.log(error);
}
```

## list-domains
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-domains)

```javascript
try {
  const input = {
    per_page: 100, // number
  };
  const {data:{domains}} = await dots.domain.listDomains(input);
  console.log(domains);
} catch (error) {
  console.log(error);
}
```

## create-domain-record
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-new-domain-record)

```javascript
try {
  const input = {
    data: "162.10.66.0", // string
    domain_name: ''// string
    flags: null, // number
    name: "www", // string
    port: null, // number
    priority: null, // number
    tag: null, // string
    ttl: 1800, // number
    type: "A", // string
    weight: null, // number
  };
  const {data:{domain_record}} = await dots.domain.createDomainRecord(input);
  console.log(domain_record);
} catch (error) {
  console.log(error);
}
```

## delete-domain-record
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-domain-record)

```javascript
try {
  const input = {
    domain_name: ''// string
    domain_record_id: 0, // number
    name: "pimentel.co", // string
  };
  const {status} = await dots.domain.deleteDomainRecord(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## get-domain-record
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain-record)

```javascript
try {
  const input = {
    domain_name: ''// string
    domain_record_id: 0, // number
    name: "pimentel.co", // string
  };
  const {data:{domain_record}} = await dots.domain.getDomainRecord(input);
  console.log(domain_record);
} catch (error) {
  console.log(error);
}
```

## list-domain-records
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-domain-records)

```javascript
try {
  const input = {
    domain_name: ''// string
    per_page: 100, // number
  };
  const {data:{domain_records}} = await dots.domain.listDomainRecords(input);
  console.log(domain_records);
} catch (error) {
  console.log(error);
}
```

## update-domain-record
[original documentation](https://developers.digitalocean.com/documentation/v2/#update-a-domain-record)

```javascript
try {
  const input = {
    data: '127.0.0.1', // string
    domain_name: ''// string
    domain_record_id: 0, // number
  };
  const {data:{domain_record}} = await dots.domain.updateDomainRecord(input);
  console.log(domain_record);
} catch (error) {
  console.log(error);
}
```
