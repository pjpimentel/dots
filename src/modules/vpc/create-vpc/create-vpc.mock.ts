export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
  "body": {
    "name": "my-new-vpc",
    "region": "nyc1",
    "ip_range": "10.10.10.0/24"
  },
};
export const response = {
    "body": {
      "vpc": {
        "id": "5a4981aa-9653-4bd1-bef5-d6bff52042e4",
        "urn": "do:vpc:5a4981aa-9653-4bd1-bef5-d6bff52042e4",
        "name": "my-new-vpc",
        "description": "",
        "region": "nyc1",
        "ip_range": "10.10.10.0/24",
        "created_at": "2020-03-13T19:20:47.442049222Z",
        "default": false
      }
    },
    "headers": {
      "content-type": "application/json; charset=utf-8",
      "status": 200,
      "ratelimit-limit": 1200,
      "ratelimit-remaining": 1137,
      "ratelimit-reset": 1415984218
    },
};
