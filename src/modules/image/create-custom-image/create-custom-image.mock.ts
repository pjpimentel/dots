export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
  "body": {
    "name": "ubuntu-18.04-minimal",
    "url": "http://cloud-images.ubuntu.com/minimal/releases/bionic/release/ubuntu-18.04-minimal-cloudimg-amd64.img",
    "distribution": "Ubuntu",
    "region": "nyc3",
    "description": "Cloud-optimized image w/ small footprint",
    "tags": [
      "base-image",
      "prod"
    ]
  }
};
export const response = {
    "body": {
      "image": {
        "created_at": "2018-09-20T19:28:00Z",
        "description": "Cloud-optimized image w/ small footprint",
        "distribution": "Ubuntu",
        "error_message": "",
        "id": 38413969,
        "name": "ubuntu-18.04-minimal",
        "regions": [],
        "type": "custom",
        "tags": ["base-image","prod"],
        "status": "NEW"
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
