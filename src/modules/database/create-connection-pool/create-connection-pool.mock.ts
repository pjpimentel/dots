export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
  "body": {
    "name": "backend-pool",
    "mode": "transaction",
    "size": 10,
    "db": "defaultdb",
    "user": "doadmin"
  },
};
export const response = {
    "body": {
      "pool": {
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
    },
    "headers": {
      "content-type": "application/json; charset=utf-8",
      "status": 200,
      "ratelimit-limit": 1200,
      "ratelimit-remaining": 1137,
      "ratelimit-reset": 1415984218
    },
};
