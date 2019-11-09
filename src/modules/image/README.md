# image

## convert-image-to-snapshot
[original documentation](https://developers.digitalocean.com/documentation/v2/#convert-an-image-to-a-snapshot)

```javascript
try {
  const input = {
    image_id: 123, // number
  };
  const {data:{action}} = await dots.image.convertImageToSnapshot(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## create-custom-image
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-custom-image)

```javascript
try {
  const input = {
    description: '', // string
    distribution: '', // string
    name: '', // string
    region: '', // string
    tags: [''], // string[]
    url: '', // string
  };
  const {data:{image}} = await dots.image.createCustomImage(input);
  console.log(image);
} catch (error) {
  console.log(error);
}
```

## delete-image
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-an-image)

```javascript
try {
  const input = {
    image_id: 123, // number
  };
  const {status} = await dots.image.deleteImage(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## get-image
[original documentation¹](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-id)
[original documentation²](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-slug)

```javascript
try {
  const input = {
    image_id: 123, // number
  };
  const {data:{image}} = await dots.image.getImage(input);
  console.log(image);
} catch (error) {
  console.log(error);
}
```

## get-image-action
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-action)

```javascript
try {
  const input = {
    image_id: 123, // number
    action_id: 123, // number
  };
  const {data:{action}} = await dots.image.getImageAction(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## list-image-actions
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-an-image)

```javascript
try {
  const input = {
    image_id: 123, // number
  };
  const {data:{actions}} = await dots.image.listImageActions(input);
  console.log(actions);
} catch (error) {
  console.log(error);
}
```

## list-images
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-images)

```javascript
try {
  const input = {
    per_page: 100, // number;
  };
  const {data:{images}} = await dots.image.listImages(input);
  console.log(images);
} catch (error) {
  console.log(error);
}
```

## transfer-image
[original documentation](https://developers.digitalocean.com/documentation/v2/#transfer-an-image)

```javascript
try {
  const input = {
    image_id: 123, // number
    region: 'region', // string
  };
  const {data:{action}} = await dots.image.transferImage(input);
  console.log(action);
} catch (error) {
  console.log(error);
}
```

## update-image
[original documentation](https://developers.digitalocean.com/documentation/v2/#update-an-image)

```javascript
try {
  const input = {
    image_id: 123, // number
  };
  const {data:{image}} = await dots.image.updateImage(input);
  console.log(image);
} catch (error) {
  console.log(error);
}
```
