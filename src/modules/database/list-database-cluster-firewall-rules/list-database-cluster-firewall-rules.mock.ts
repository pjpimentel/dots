export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
};
export const response = {
    "body": {
      "rules": [
        {
          "uuid": "79f26d28-ea8a-41f2-8ad8-8cfcdd020095",
          "cluster_uuid": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30",
          "type": "k8s",
          "value": "ff2a6c52-5a44-4b63-b99c-0e98e7a63d61",
          "created_at": "2019-11-14T20:30:28Z"
        },
        {
          "uuid": "adfe81a8-0fa1-4e2d-973f-06aa5af19b44",
          "cluster_uuid": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30",
          "type": "ip_addr",
          "value": "192.168.1.1",
          "created_at": "2019-11-14T20:30:28Z"
        },
        {
          "uuid": "b9b42276-8295-4313-b40f-74173a7f46e6",
          "cluster_uuid": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30",
          "type": "droplet",
          "value": "163973392",
          "created_at": "2019-11-14T20:30:28Z"
        },
        {
          "uuid": "718d23e0-13d7-4129-8a00-47fb72ee0deb",
          "cluster_uuid": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30",
          "type": "tag",
          "value": "backend",
          "created_at": "2019-11-14T20:30:28Z"
        }
      ],
      "links": {
        "pages": {
          "last": "https://api.digitalocean.com/v2/droplets?page=3&per_page=1",
          "next": "https://api.digitalocean.com/v2/droplets?page=2&per_page=1"
        }
      },
      "meta": {
        "total": 3
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
