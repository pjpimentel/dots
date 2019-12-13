export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
  "body": {
    "resources": [
      "do:droplet:1",
      "do:floatingip:192.168.99.100",
    ]
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
        "status": "assigned"
      },
      {
        "urn": "do:floatingip:192.168.99.100",
        "assigned_at": "2018-09-28T19:26:37Z",
        "links": {
          "self": "https://api.digitalocean.com/v2/floating_ips/192.168.99.100"
        },
        "status": "assigned"
      }
    ],
    "links": {
      "pages": {
        "first": "https://api.digitalocean.com/v2/projects/4e1bfbc3-dc3e-41f2-a18f-1b4d7ba71679/resources?page=1",
        "last": "https://api.digitalocean.com/v2/projects/4e1bfbc3-dc3e-41f2-a18f-1b4d7ba71679/resources?page=1"
      }
    },
    "meta": {
      "total": 2
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
