export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
};
export const response = {
    "body": {
      "volumes": [
        {
          "id": "506f78a4-e098-11e5-ad9f-000f53306ae1",
          "region": {
            "name": "New York 1",
            "slug": "nyc1",
            "sizes": [
              "s-1vcpu-1gb",
              "s-1vcpu-2gb",
              "s-1vcpu-3gb",
              "s-2vcpu-2gb",
              "s-3vcpu-1gb",
              "s-2vcpu-4gb",
              "s-4vcpu-8gb",
              "s-6vcpu-16gb",
              "s-8vcpu-32gb",
              "s-12vcpu-48gb",
              "s-16vcpu-64gb",
              "s-20vcpu-96gb",
              "s-24vcpu-128gb",
              "s-32vcpu-192gb"
            ],
            "features": [
              "private_networking",
              "backups",
              "ipv6",
              "metadata"
            ],
            "available": true
          },
          "droplet_ids": [

          ],
          "name": "example",
          "description": "Block store for examples",
          "size_gigabytes": 10,
          "created_at": "2016-03-02T17:00:49Z",
          "tags": [
            "aninterestingtag"
          ]
        }
      ],
      "links": {
      },
      "meta": {
        "total": 1
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
