# action

## get-action
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-action)
```javascript
try {
  const input = {action_id: 'my-action-id'};
  const {data:{action}} = await dots.action.getAction(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## list-actions
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-actions)
```javascript
try {
  const const input = {per_page: 100};
  const {data:{actions}} = await dots.action.listActions(input);
  console.log(actions);
} catch (error) {
  console.log(error);
}
```
