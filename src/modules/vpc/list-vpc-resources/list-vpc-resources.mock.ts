export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
};
export const response = {
    "body": {
      "members": [
        {
          "urn": "do:loadbalancer:fb294d78-d193-4cb2-8737-ea620993591b",
          "name": "nyc1-load-balancer-01",
          "created_at": "2020-03-13T19:30:48Z"
        },
        {
          "urn": "do:dbaas:13f7a2f6-43df-4c4a-8129-8733267ddeea",
          "name": "db-postgresql-nyc1-55986",
          "created_at": "2020-03-13T19:30:18Z"
        },
        {
          "urn": "do:kubernetes:da39d893-96e1-4e4d-971d-1fdda33a46b1",
          "name": "k8s-nyc1-1584127772221",
          "created_at": "2020-03-13T19:30:16Z"
        },
        {
          "urn": "do:droplet:86e29982-03a7-4946-8a07-a0114dff8754",
          "name": "ubuntu-s-1vcpu-1gb-nyc1-01",
          "created_at": "2020-03-13T19:29:20Z"
        }
      ],
      "links": {
      },
      "meta": {
        "total": 4
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
