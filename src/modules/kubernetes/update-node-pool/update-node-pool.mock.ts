export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
  "body": {
    "name": "frontend",
    "count": 1,
    "tags": [
      "frontend"
    ]
  },
};
export const response = {
    "body": {
      "node_pool": {
        "id": "86c9bc8c-b2c3-4d40-8000-b0c7bee27305",
        "name": "frontend",
        "size": "s-1vcpu-2gb",
        "count": 1,
        "tags": [
          "frontend",
          "k8s",
          "k8s:bd5f5959-5e1e-4205-a714-a914373942af",
          "k8s:worker"
        ],
        "nodes": [
          {
            "id": "9b06abad-0839-450f-afb6-953ca4ee9fc8",
            "name": "",
            "status": {
              "state": "provisioning"
            },
            "created_at": "2018-11-16T22:31:25Z",
            "updated_at": "2018-11-16T22:31:25Z"
          },
          {
            "id": "c26c41b7-526a-4d1c-934c-65b481a6b1f2",
            "name": "",
            "status": {
              "state": "provisioning"
            },
            "created_at": "2018-11-16T22:31:25Z",
            "updated_at": "2018-11-16T22:31:25Z"
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
