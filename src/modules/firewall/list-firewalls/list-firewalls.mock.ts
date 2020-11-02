export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
};
export const response = {
  "body": {
    "firewalls": [
      {
        "id": "fb6045f1-cf1d-4ca3-bfac-18832663025b",
        "name": "firewall",
        "status": "succeeded",
        "inbound_rules": [
          {
            "protocol": "tcp",
            "ports": "80",
            "sources": {
              "load_balancer_uids": [
                "4de7ac8b-495b-4884-9a69-1050c6793cd6"
              ]
            }
          },
          {
            "protocol": "tcp",
            "ports": "22",
            "sources": {
              "tags": [
                "gateway"
              ],
              "addresses": [
                "18.0.0.0/8"
              ]
            }
          }
        ],
        "outbound_rules": [
          {
            "protocol": "tcp",
            "ports": "80",
            "destinations": {
              "addresses": [
                "0.0.0.0/0",
                "::/0"
              ]
            }
          }
        ],
        "created_at": "2017-05-23T21:23:59Z",
        "droplet_ids": [
          8043964
        ],
        "tags": [

        ],
        "pending_changes": [

        ]
      }
    ],
    "links": {
    },
    "meta": {
      "total": 1
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
