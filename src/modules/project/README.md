# project

## create-project
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-project)
```javascript
try {
  const input = {
    name: '', // string
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
