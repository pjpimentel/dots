export const request = {
  "headers": {
    "Content-Type": "application/json",
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
          "uri": "postgres://doadmin:eja9o6sycf8e54yl@backend2-do-user-19081923-0.db.ondigitalocean.com:25061/backend-pool?sslmode=require",
          "database": "backend-pool",
          "host": "backend2-do-user-19081923-0.db.ondigitalocean.com",
          "port": 25061,
          "user": "doadmin",
          "password": "eja9o6sycf8e54yl",
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
