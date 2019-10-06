export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
  "body": {
    "backups": false,
    "image": "ubuntu-16-04-x64",
    "ipv6": true,
    "monitoring": true,
    "name": "example.com",
    "private_networking": false,
    "region": "nyc3",
    "size": "s-1vcpu-1gb",
    "ssh_keys": [107149],
    "tags": ["web"],
    "user_data": 'test-user-data',
    "volumes": [],
  },
  "minimumBody": {
    "name": "example.com",
    "region": "nyc3",
    "size": "s-1vcpu-1gb",
    "image": "ubuntu-16-04-x64",
  },
};
export const response = {
    "body": {
      "droplet": {
        "id": 3164494,
        "name": "example.com",
        "memory": 1024,
        "vcpus": 1,
        "disk": 25,
        "locked": true,
        "status": "new",
        "kernel": {
          "id": 2233,
          "name": "Ubuntu 14.04 x64 vmlinuz-3.13.0-37-generic",
          "version": "3.13.0-37-generic"
        },
        "created_at": "2014-11-14T16:36:31Z",
        "features": [
          "virtio"
        ],
        "backup_ids": [

        ],
        "snapshot_ids": [

        ],
        "image": {
        },
        "volume_ids": [

        ],
        "size": {
        },
        "size_slug": "s-1vcpu-1gb",
        "networks": {
        },
        "region": {
        },
        "tags": [
          "web"
        ]
      },
      "links": {
        "actions": [
          {
            "id": 36805096,
            "rel": "create",
            "href": "https://api.digitalocean.com/v2/actions/36805096"
          }
        ]
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
