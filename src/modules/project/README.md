# project

## create-project
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-project)
```javascript
try {
  const input = {
    name: '', // string
    description: '', // string
    purpose: '', // string
    environment: '', // string
  };
  const {data:{project}} = await dots.project.createProject(input)
  console.log(project);
} catch (error) {
  console.log(error);
}
```

## list-projects
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-projects)
```javascript
try {
  const input = {
    page: 1, // number
    per_page: 25, // number
  };
  const {data:{projects}} = await dots.project.listProjects(input)
  console.log(projects);
} catch (error) {
  console.log(error);
}
```

## update-project
[original documentation](https://developers.digitalocean.com/documentation/v2/#update-a-project)
```javascript
try {
  const input = {
    project_id: '', // string
    name: '', // string
    description: '', // string
    purpose: '', // string
    environment: '', // string
    is_default: true, // boolean
  };
  const {data:{project}} = await dots.project.updateProject(input)
  console.log(project);
} catch (error) {
  console.log(error);
}
```
