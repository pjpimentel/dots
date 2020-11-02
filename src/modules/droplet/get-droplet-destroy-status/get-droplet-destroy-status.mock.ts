export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
};
export const response = {
    "body": {
      "droplet": {
        "id": "187000742",
        "name": "ubuntu-s-1vcpu-1gb-nyc1-01",
        "destroyed_at": "2020-04-01T18:11:49Z"
      },
      "resources": {
        "snapshots": [
          {
            "id": "61486916",
            "name": "ubuntu-s-1vcpu-1gb-nyc1-01-1585758823330",
            "destroyed_at": "2020-04-01T18:11:44Z"
          }
        ],
        "volumes": [
    
        ],
        "volume_snapshots": [
          {
            "id": "edb0478d-7436-11ea-86e6-0a58ac144b91",
            "name": "volume-nyc1-01-1585758983629",
            "destroyed_at": "2020-04-01T18:11:44Z"
          }
        ]
      },
      "completed_at": "2020-04-01T18:11:49Z",
      "failures": 0
    },
    "headers": {
      "content-type": "application/json; charset=utf-8",
      "status": 200,
      "ratelimit-limit": 1200,
      "ratelimit-remaining": 1137,
      "ratelimit-reset": 1415984218
    },
};
