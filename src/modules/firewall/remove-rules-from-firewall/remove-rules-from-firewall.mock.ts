export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
  "body": {
    "inbound_rules": [
      {
        "protocol": "tcp",
        "ports": "3306",
        "sources": {
          "droplet_ids": [
            49696269
          ]
        }
      }
    ],
    "outbound_rules": [
      {
        "protocol": "tcp",
        "ports": "3306",
        "destinations": {
          "droplet_ids": [
            49696269
          ]
        }
      }
    ]
  },
};
export const response = {
  "headers": {
    "content-type": "application/json; charset=utf-8",
    "status": 200,
    "ratelimit-limit": 1200,
    "ratelimit-remaining": 1137,
    "ratelimit-reset": 1415984218
  },
};
