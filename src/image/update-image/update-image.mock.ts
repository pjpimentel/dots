export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
  "body": {
    "name": "ubuntu-18.04-minimal",
    "distribution": "Ubuntu",
    "description": "update-works"
  }
};
export const response = {
    "body": {
      "image": {
        "id": 7938391,
        "name": "new-image-name",
        "distribution": "Ubuntu",
        "slug": null,
        "public": false,
        "regions": [
          "nyc3",
          "nyc3"
        ],
        "created_at": "2014-11-14T16:44:03Z",
        "min_disk_size": 20,
        "size_gigabytes": 2.34,
        "description": "",
        "tags": [

        ],
        "status": "available",
        "error_message": ""
      },
    },
    "headers": {
      "content-type": "application/json; charset=utf-8",
      "status": 200,
      "ratelimit-limit": 1200,
      "ratelimit-remaining": 1137,
      "ratelimit-reset": 1415984218
    },
};
