export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
  "body": {
    "rules": [
      {
        "type": "ip_addr",
        "value": "192.168.1.1"
      },
      {
        "type": "droplet",
        "value": "163973392"
      },
      {
        "type": "k8s",
        "value": "ff2a6c52-5a44-4b63-b99c-0e98e7a63d61"
      },
      {
        "type": "tag",
        "value": "backend"
      }
    ]
  },
};
export const response = {
    "body": undefined,
    "headers": {
      "content-type": "application/json; charset=utf-8",
      "status": 202,
      "ratelimit-limit": 1200,
      "ratelimit-remaining": 1137,
      "ratelimit-reset": 1415984218
    },
};
