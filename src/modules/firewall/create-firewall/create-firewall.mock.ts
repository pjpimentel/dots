export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
  "body": {
    "name": "firewall",
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
    "droplet_ids": [
      8043964
    ]
  },
};
export const response = {
  "body": {
    "firewall": {
      "id": "bb4b2611-3d72-467b-8602-280330ecd65c",
      "name": "firewall",
      "status": "waiting",
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
      "created_at": "2017-05-23T21:24:00Z",
      "droplet_ids": [
        8043964
      ],
      "tags": [

      ],
      "pending_changes": [
        {
          "droplet_id": 8043964,
          "removing": false,
          "status": "waiting"
        }
      ]
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
