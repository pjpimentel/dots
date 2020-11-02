export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
};
export const response = {
    "body": {
      "backups": [
        {
          "created_at": "2019-01-11T18:42:27Z",
          "size_gigabytes": 0.03357696
        },
        {
          "created_at": "2019-01-12T18:42:29Z",
          "size_gigabytes": 0.03364864
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
