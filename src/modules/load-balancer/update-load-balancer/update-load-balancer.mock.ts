export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
  "body": {
    "name": "example-lb-01",
    "region": "nyc3",
    "forwarding_rules": [
      {
        "entry_protocol": "http",
        "entry_port": 80,
        "target_protocol": "http",
        "target_port": 80,
        "certificate_id": "",
        "tls_passthrough": false
      },
      {
        "entry_protocol": "https",
        "entry_port": 444,
        "target_protocol": "https",
        "target_port": 443,
        "tls_passthrough": true
      }
    ],
    "health_check": {
      "protocol": "http",
      "port": 80,
      "path": "/",
      "check_interval_seconds": 10,
      "response_timeout_seconds": 5,
      "healthy_threshold": 5,
      "unhealthy_threshold": 3
    },
    "sticky_sessions": {
      "type": "none"
    },
    "droplet_ids": [
      3164444,
      3164445
    ],
    "vpc_uuid": "vpc_uuid",
    "tag": "droplet-tag"
  },
  "minimumBody": {
    "name": "example-lb-01",
    "region": "nyc3",
    "forwarding_rules": [
      {
        "entry_protocol": "http",
        "entry_port": 80,
        "target_protocol": "http",
        "target_port": 80,
        "certificate_id": "",
        "tls_passthrough": false
      },
      {
        "entry_protocol": "https",
        "entry_port": 444,
        "target_protocol": "https",
        "target_port": 443,
        "tls_passthrough": true
      }
    ]
  },
};
export const response = {
    "body": {
      "load_balancer": {
        "id": "4de7ac8b-495b-4884-9a69-1050c6793cd6",
        "name": "example-lb-01",
        "ip": "",
        "algorithm": "round_robin",
        "status": "new",
        "created_at": "2017-02-01T22:22:58Z",
        "forwarding_rules": [
          {
            "entry_protocol": "http",
            "entry_port": 80,
            "target_protocol": "http",
            "target_port": 80,
            "certificate_id": "",
            "tls_passthrough": false
          },
          {
            "entry_protocol": "https",
            "entry_port": 444,
            "target_protocol": "https",
            "target_port": 443,
            "certificate_id": "",
            "tls_passthrough": true
          }
        ],
        "health_check": {
          "protocol": "http",
          "port": 80,
          "path": "/",
          "check_interval_seconds": 10,
          "response_timeout_seconds": 5,
          "healthy_threshold": 5,
          "unhealthy_threshold": 3
        },
        "sticky_sessions": {
          "type": "none"
        },
        "region": {
          "name": "New York 3",
          "slug": "nyc3",
          "sizes": [
            "s-1vcpu-1gb",
            "s-1vcpu-2gb",
            "s-1vcpu-3gb",
            "s-2vcpu-2gb",
            "s-3vcpu-1gb",
            "s-2vcpu-4gb",
            "s-4vcpu-8gb",
            "s-6vcpu-16gb",
            "s-8vcpu-32gb",
            "s-12vcpu-48gb",
            "s-16vcpu-64gb",
            "s-20vcpu-96gb",
            "s-24vcpu-128gb",
            "s-32vcpu-192gb"
          ],
          "features": [
            "private_networking",
            "backups",
            "ipv6",
            "metadata",
            "install_agent"
          ],
          "available": true
        },
        "tag": "",
        "droplet_ids": [
          3164444,
          3164445
        ],
        "redirect_http_to_https": false,
        "enable_proxy_protocol": false
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
