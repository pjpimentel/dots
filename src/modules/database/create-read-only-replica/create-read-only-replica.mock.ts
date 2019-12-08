export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
  "body": {
    "name": "read-nyc3-01",
    "region": "nyc3",
    "size": "db-s-2vcpu-4gb"
  },
};
export const response = {
    "body": {
      "replica": {
        "name": "read-nyc3-01",
        "connection": {
          "uri": "postgres://doadmin:wv78n3zpz42xezdk@read-nyc3-01-do-user-19081923-0.db.ondigitalocean.com:25060/defaultdb?sslmode=require",
          "database": "",
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
        "status": "forking",
        "created_at": "2019-01-31T19:57:32Z"
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
