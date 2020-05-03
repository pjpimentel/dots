export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
  "body": {
    "size": "s-2vcpu-4gb",
    "count": 1,
    "name": "pool-02",
    "tags": [
      "web"
    ],
    "auto_scale": true,
    "min_nodes": 0,
    "max_nodes": 0,
    "labels": {
      "service": "web",
      "priority": "high"
    }
  },
  "minimumBody": {
    "size": "s-2vcpu-4gb",
    "count": 1,
    "name": "pool-02",
  },
};
export const response = {
  "body": {
    "node_pool": {
      "id": "5a41341c-4dbf-40eb-88b0-e508743b505b",
      "name": "pool-02",
      "size": "s-2vcpu-4gb",
      "count": 1,
      "tags": [
        "web",
        "k8s",
        "k8s:29433ce6-4df7-4957-a880-fbc2ccd54354",
        "k8s:worker"
      ],
      "labels": {
        "service": "web",
        "priority": "high"
      },
      "nodes": [
        {
          "id": "33bb3b8f-2533-487d-9ad6-a5da3098526a",
          "name": "",
          "status": {
            "state": "provisioning"
          },
          "created_at": "2018-11-30T20:28:02Z",
          "updated_at": "2018-11-30T20:28:02Z"
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
