export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
};
export const response = {
    "body": {
      "resources": [
        {
          "urn": "do:droplet:1",
          "assigned_at": "2018-09-28T19:26:37Z",
          "links": {
            "self": "https://api.digitalocean.com/v2/droplets/1"
          },
          "status": "ok"
        }
      ],
      "links": {
        "pages": {
          "last": "https://api.digitalocean.com/v2/droplets?page=3&per_page=1",
          "next": "https://api.digitalocean.com/v2/droplets?page=2&per_page=1"
        }
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
