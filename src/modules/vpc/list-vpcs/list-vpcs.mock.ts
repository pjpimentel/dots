export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
};
export const response = {
  "body": {
    "vpcs": [
      {
        "id": "5a4981aa-9653-4bd1-bef5-d6bff52042e4",
        "urn": "do:vpc:5a4981aa-9653-4bd1-bef5-d6bff52042e4",
        "name": "my-new-vpc",
        "description": "",
        "region": "nyc1",
        "ip_range": "10.10.10.0/24",
        "created_at": "2020-03-13T19:20:47Z",
        "default": false
      },
      {
        "id": "e0fe0f4d-596a-465e-a902-571ce57b79fa",
        "urn": "do:vpc:e0fe0f4d-596a-465e-a902-571ce57b79fa",
        "name": "default-nyc1",
        "description": "",
        "region": "nyc1",
        "ip_range": "10.102.0.0/20",
        "created_at": "2020-03-13T19:29:20Z",
        "default": true
      },
      {
        "id": "d455e75d-4858-4eec-8c95-da2f0a5f93a7",
        "urn": "do:vpc:d455e75d-4858-4eec-8c95-da2f0a5f93a7",
        "name": "default-nyc3",
        "description": "",
        "region": "nyc3",
        "ip_range": "10.100.0.0/20",
        "created_at": "2019-11-19T22:19:35Z",
        "default": true
      }
    ],
    "links": {
    },
    "meta": {
      "total": 3
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
