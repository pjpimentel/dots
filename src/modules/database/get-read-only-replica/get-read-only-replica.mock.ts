export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
};
export const response = {
    "body": {
      "replica": {
        "name": "read-nyc3-01",
        "connection": {
          "uri": "",
          "database": "defaultdb",
          "host": "read-nyc3-01-do-user-19081923-0.db.ondigitalocean.com",
          "port": 25060,
          "user": "doadmin",
          "password": "wv78n3zpz42xezdk",
          "ssl": true
        },
        "private_connection": {
          "uri": "postgres://doadmin:wv78n3zpz42xezdk@private-read-nyc3-01-do-user-19081923-0.db.ondigitalocean.com:25060/defaultdb?sslmode=require",
          "database": "",
          "host": "private-read-nyc3-01-do-user-19081923-0.db.ondigitalocean.com",
          "port": 25060,
          "user": "doadmin",
          "password": "wv78n3zpz42xezdk",
          "ssl": true
        },
        "region": "nyc3",
        "status": "active",
        "created_at": "0001-01-01T00:00:00Z"
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
