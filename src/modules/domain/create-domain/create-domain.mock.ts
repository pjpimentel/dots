export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
  "body": {
    "name": "example.com",
    "ip_address": "1.2.3.4"
  },
  "minimumBody": {
    "name": "example.com",
  },
};
export const response = {
    "body": {
      "domain": {
        "name": "example.com",
        "ttl": 1800,
        "zone_file": null
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
