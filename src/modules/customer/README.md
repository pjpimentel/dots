# customer

## get-balance
[original documentation](https://developers.digitalocean.com/documentation/v2/#balance)
```javascript
try {
  const {data:balance} = await dots.balance.getBalance();
  console.log(balance);
} catch (error) {
  console.log(error);
}
```
