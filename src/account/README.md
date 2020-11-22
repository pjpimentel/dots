# account

## get-account
[original documentation](https://developers.digitalocean.com/documentation/v2/#get-user-information)
```javascript
try {
  const {data:{account}} = await dots.account.getAccount();
  console.log(account);
} catch (error) {
  console.log(error);
}
```
