# ssh-key

## create-ssh-key
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-new-key)
```javascript
try {
  const input = {
    name: '', // string
    public_key: '', // string
  };
  const {data:{ssh_key}} = await dots.sshKey.createSshKey(input)
  console.log(ssh_key);
} catch (error) {
  console.log(error);
}
```

## destroy-ssh-key
[original documentation](https://developers.digitalocean.com/documentation/v2/#destroy-a-key)
```javascript
try {
  const input = {
    id: '', // string | number;
  };
  const {status} = await dots.sshKey.destroySshKey(input)
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## get-ssh-key
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key)
```javascript
try {
  const input = {
    id: '', // string | number;
  };
  const {data:{ssh_key}} = await dots.sshKey.getSshKey(input)
  console.log(ssh_key);
} catch (error) {
  console.log(error);
}
```

## list-ssh-keys
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-keys)
```javascript
try {
  const input = {
    page: 1, // number
  };
  const {data:{ssh_keys}} = await dots.sshKey.listSshKeys(input)
  console.log(ssh_keys);
} catch (error) {
  console.log(error);
}
```

## update-ssh-key
[original documentation](https://developers.digitalocean.com/documentation/v2/#update-a-key)
```javascript
try {
  const input = {
    id: '', // string | number;
    name: 'new-name', // string;
  };
  const {data:{ssh_key}} = await dots.sshKey.updateSshKey(input)
  console.log(ssh_key);
} catch (error) {
  console.log(error);
}
```

<!-- TODO: ref field `id` -> `ssh_key_id` -->
