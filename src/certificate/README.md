# certificate

## create-certificate
[original documentation¹](https://developers.digitalocean.com/documentation/v2/#create-a-new-custom-certificate)

[original documentation²](https://developers.digitalocean.com/documentation/v2/#create-a-new-let-s-encrypt-certificate)

```javascript
try {
  const input = {
    certificate_chain: '', // string;
    dns_names: ['pimentel.co'], // string[]
    leaf_certificate: '', // string
    name: '', // string
    private_key: '' // string
    type: '', // 'custom' | 'lets_encrypt';
  };
  const {data:{certificate}} = await dots.certificate.createCertificate(input);
  console.log(certificate);
} catch (error) {
  console.log(error);
}
```

## delete-certificate
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-certificate)
```javascript
try {
  const input = {id: 'my-certificate-id'};
  const {data:{certificate}} = await dots.certificate.deleteCertificate(input);
  console.log(certificate);
} catch (error) {
  console.log(error);
}
```

## get-certificate
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-certificate)
```javascript
try {
  const input = {id: 'my-certificate-id'};
  const {data:{certificate}} = await dots.certificate.getCertificate(input);
  console.log(certificate);
} catch (error) {
  console.log(error);
}
```

## list-certificates
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-certificates)
```javascript
try {
  const input = {per_page: 100};
  const {data:{certificates}} = await dots.certificate.listCertificates(input);
  console.log(certificates);
} catch (error) {
  console.log(error);
}
```
