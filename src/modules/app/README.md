# app

## list-apps
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-apps)

```javascript
try {
  const input = {
    page: 1, // number
    per_page: 100, // number
  };
  const {data:{apps}} = await dots.apps.listApps(input);
  console.log(apps);
} catch (error) {
  console.log(error);
}
```

## get-app
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-app)

```javascript
try {
  const input = {
    app_id: 'string', // string
  };
  const {data:{app}} = await dots.app.listApps(input);
  console.log(app);
} catch (error) {
  console.log(error);
}
```

## create-app
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-new-app)

```javascript
try {
  const input = {
    spec: {}, // IAppSpec
  };
  const {data:{app}} = await dots.app.createApp(input);
  console.log(app);
} catch (error) {
  console.log(error);
}
```
