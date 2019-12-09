export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
};
export const response = {
    "body": {
      "users": [
        {
          "name": "app-01",
          "role": "normal",
          "password": "jge5lfxtzhx42iff"
        },
        {
          "name": "doadmin",
          "role": "primary",
          "password": "wv78n3zpz42xezdk"
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
