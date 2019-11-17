# tag

## create-tag
[original documentation](https://developers.digitalocean.com/documentation/v2/#create-a-new-tag)
```javascript
try {
  const input = {
    name: '', // string
  };
  const {data:{tag}} = await dots.tag.createTag(input)
  console.log(tag);
} catch (error) {
  console.log(error);
}
```

## delete-tag
[original documentation](https://developers.digitalocean.com/documentation/v2/#delete-a-tag)
```javascript
try {
  const input = {
    tag_name: '', // string
  };
  const {status} = await dots.tag.deleteTag(input)
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## get-tag
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-a-tag)
```javascript
try {
  const input = {
    tag_name: '', // string
  };
  const {data:{tag}} = await dots.tag.getTag(input)
  console.log(tag);
} catch (error) {
  console.log(error);
}
```

## list-tags
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-tags)
```javascript
try {
  const input = {
    page: 1, // number
  };
  const {data:{tags}} = await dots.tag.listTags(input)
  console.log(tags);
} catch (error) {
  console.log(error);
}
```

## tag-resources
[original documentation](https://developers.digitalocean.com/documentation/v2/#tag-a-resource)
```javascript
try {
  const input = {
    tag_name: '', // strng
    resources: [{...}], // ITagResourcePayload[]
  };
  const {status} = await dots.tag.tagResources(input)
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## untag-resources
[original documentation](https://developers.digitalocean.com/documentation/v2/#untag-a-resource)
```javascript
try {
  const input = {
    tag_name: '', // strng
    resources: [{...}], // ITagResourcePayload[]
  };
  const {status} = await dots.tag.untagResources(input)
  console.log(status);
} catch (error) {
  console.log(error);
}
```
