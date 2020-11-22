export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
  "body": {
    "type": "power_off"
  }
};
export const response = {
    "body": {
      "actions": [
        {
          "id": 36805187,
          "status": "completed",
          "type": "snapshot",
          "started_at": "2014-11-14T16:37:34Z",
          "completed_at": "2014-11-14T16:39:32Z",
          "resource_id": 3164494,
          "resource_type": "droplet",
          "region": {
            "name": "New York 3",
            "slug": "nyc3",
            "sizes": [
              "s-1vcpu-3gb",
              "m-1vcpu-8gb",
              "s-3vcpu-1gb",
              "s-1vcpu-2gb",
              "s-2vcpu-2gb",
              "s-2vcpu-4gb",
              "s-4vcpu-8gb",
              "s-6vcpu-16gb",
              "s-8vcpu-32gb",
              "s-12vcpu-48gb",
              "s-16vcpu-64gb",
              "s-20vcpu-96gb",
              "s-1vcpu-1gb",
              "c-1vcpu-2gb",
              "s-24vcpu-128gb"
            ],
            "features": [
              "private_networking",
              "backups",
              "ipv6",
              "metadata",
              "server_id",
              "install_agent",
              "storage",
              "image_transfer"
            ],
            "available": true
          },
          "region_slug": "nyc3"
        }
      ],
      "links": {
        "pages": {
          "last": "https://api.digitalocean.com/v2/droplets/3164494/actions?page=3&per_page=1",
          "next": "https://api.digitalocean.com/v2/droplets/3164494/actions?page=2&per_page=1"
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
