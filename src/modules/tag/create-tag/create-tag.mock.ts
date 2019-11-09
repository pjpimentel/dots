export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
  "body": {
    "name": "my-tag",
  },
};
export const response = {
    "body": {
      "tag": {
        "name": "awesome",
        "resources": {
          "count": 0,
          "droplets": {
            "count": 0
          },
          "images": {
            "count": 0
          },
          "volumes": {
            "count": 0
          },
          "volume_snapshots": {
            "count": 0
          },
          "databases": {
            "count": 0
          }
        }
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
