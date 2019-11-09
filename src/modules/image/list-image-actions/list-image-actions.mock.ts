export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
};
export const response = {
    "body": {
      "actions": [
        {
          "id": 29410565,
          "status": "completed",
          "type": "transfer",
          "started_at": "2014-07-25T15:04:21Z",
          "completed_at": "2014-07-25T15:10:20Z",
          "resource_id": 7555620,
          "resource_type": "image",
          "region": {
            "name": "New York 2",
            "slug": "nyc2",
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
          "region_slug": "nyc2"
        }
      ],
      "links": {
        "pages": {
          "last": "https://api.digitalocean.com/v2/images/7555620/actions?page=5&per_page=1",
          "next": "https://api.digitalocean.com/v2/images/7555620/actions?page=2&per_page=1"
        }
      },
      "meta": {
        "total": 5
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
