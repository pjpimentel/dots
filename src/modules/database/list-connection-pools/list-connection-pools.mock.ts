export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
};
export const response = {
    "body": {
      "pools": [
        {
          "user": "doadmin",
          "name": "reporting-pool",
          "size": 10,
          "db": "defaultdb",
          "mode": "session",
          "connection": {
            "uri": "postgres://doadmin:wv78n3zpz42xezdk@backend-do-user-19081923-0.db.ondigitalocean.com:25061/foo?sslmode=require",
            "database": "foo",
            "host": "backend-do-user-19081923-0.db.ondigitalocean.com",
            "port": 25061,
            "user": "doadmin",
            "password": "wv78n3zpz42xezdk",
            "ssl": true
          }
        },
        {
          "user": "doadmin",
          "name": "backend-pool",
          "size": 10,
          "db": "defaultdb",
          "mode": "transaction",
          "connection": {
            "uri": "postgres://doadmin:wv78n3zpz42xezdk@backend-do-user-19081923-0.db.ondigitalocean.com:25061/backend-pool?sslmode=require",
            "database": "backend-pool",
            "host": "backend-do-user-19081923-0.db.ondigitalocean.com",
            "port": 25061,
            "user": "doadmin",
            "password": "wv78n3zpz42xezdk",
            "ssl": true
          }
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
