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

## update-app
[original documentation](https://developers.digitalocean.com/documentation/v2/#update-an-app)

```javascript
try {
  const input = {
    spec: {}, // IAppSpec
    app_id: '', // string
  };
  const {data:{app}} = await dots.app.updateApp(input);
  console.log(app);
} catch (error) {
  console.log(error);
}
```

## delete-app
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-an-app)

```javascript
try {
  const input = {
    app_id: '', // string
  };
  const {status} = await dots.app.deleteApp(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## run-app-detection
[original documentation](https://developers.digitalocean.com/documentation/v2/#run-app-detection)

```javascript
try {
  const input = {
    git: {}, // GitSpec
    github: {}, // GithubSpec
    commit_sha: '', // strin
    component_type: '', // string
  };
  const {data:{components}} = await dots.app.runAppDetection(input);
  console.log(components);
} catch (error) {
  console.log(error);
}
```

## list-app-deploymenyts
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-app-deployments)

```javascript
try {
  const input = {
    app_id: '', // string
    page: 1, // number
    per_page: 100, // number
  };
  const {data:{deployments}} = await dots.apps.listAppDeployments(input);
  console.log(deployments);
} catch (error) {
  console.log(error);
}
```
