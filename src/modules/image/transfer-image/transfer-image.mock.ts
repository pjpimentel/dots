export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
  "body": {
    "type": "transfer",
    "region": "nyc2"
  }
};
export const response = {
    "body": {
      "action": {
        "id": 36805527,
        "status": "in-progress",
        "type": "transfer",
        "started_at": "2014-11-14T16:42:45Z",
        "completed_at": null,
        "resource_id": 7938269,
        "resource_type": "image",
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
    },
    "headers": {
      "content-type": "application/json; charset=utf-8",
      "status": 200,
      "ratelimit-limit": 1200,
      "ratelimit-remaining": 1137,
      "ratelimit-reset": 1415984218
    },
};
