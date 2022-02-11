export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
  "body": {
    "forwarding_rules": [
      {
        "entry_protocol": "tcp",
        "entry_port": 3306,
        "target_protocol": "tcp",
        "target_port": 3306
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
