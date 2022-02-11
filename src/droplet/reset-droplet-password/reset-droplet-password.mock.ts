export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
  "body": {
    "type": "password_reset",
  },
};
export const response = {
    "body": {
      "action": {
        "id": 72531856,
        "status": "completed",
        "type": "password_reset",
        "started_at": "2015-11-12T17:51:03Z",
        "completed_at": "2015-11-12T17:51:14Z",
        "resource_id": '1234',
        "resource_type": "volume",
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
        "region_slug": "nyc1"
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
