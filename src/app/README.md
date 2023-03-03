# app

## list-apps
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-apps)

```javascript
try {
  const input = {
    page: 1, // number
    per_page: 100, // number
    with_projects: false, // boolean
  };
  const {data:{apps}} = await dots.app.listApps(input);
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
    project_id: '', // string
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

## list-app-deployments
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-app-deployments)

```javascript
try {
  const input = {
    app_id: '', // string
    page: 1, // number
    per_page: 100, // number
  };
  const {data:{deployments}} = await dots.app.listAppDeployments(input);
  console.log(deployments);
} catch (error) {
  console.log(error);
}
```

## get-app-deployment
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-app-deployment)

```javascript
try {
  const input = {
    app_id: '', // string
    deployment_id: '', // string
  };
  const {data:{deployment}} = await dots.app.getAppDeployment(input);
  console.log(deployment);
} catch (error) {
  console.log(error);
}
```

## create-app-deployment
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-an-app-deployment)

```javascript
try {
  const input = {
    app_id: '', // string
    force_build: false, // boolean
  };
  const {data:{deployment}} = await dots.app.createAppDeployment(input);
  console.log(deployment);
} catch (error) {
  console.log(error);
}
```

## cancel-app-deployment
[original documentation](https://developers.digitalocean.com/documentation/v2/#cancel-a-deployment)

```javascript
try {
  const input = {
    app_id: '', // string
    deployment_id: '', // string
  };
  const {data:{deployment}} = await dots.app.cancelAppDeployment(input);
  console.log(deployment);
} catch (error) {
  console.log(error);
}
```

## get-app-deployment-logs
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-deployment-logs)

```javascript
try {
  const input = {
    app_id: '', // string
    component_name: '', // string
    deployment_id: '', // string
    follow: true, // boolean
    pod_connection_timeout: '', // string
    type: '', // string
  };
  const {data:{live_url}} = await dots.app.getAppDeploymentLogs(input);
  console.log(live_url);
} catch (error) {
  console.log(error);
}
```

## get-aggregated-app-deployment-logs
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-aggregate-deployment-logs)

```javascript
try {
  const input = {
    app_id: '', // string
    component_name: '', // string
    deployment_id: '', // string
    follow: true, // boolean
    pod_connection_timeout: '', // string
    type: '', // string
  };
  const {data:{live_url}} = await dots.app.getAggregatedAppDeploymentLogs(input);
  console.log(live_url);
} catch (error) {
  console.log(error);
}
```
