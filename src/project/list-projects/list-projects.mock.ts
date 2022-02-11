export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
};
export const response = {
  "body": {
    "projects": [
      {
        "id": "4e1bfbc3-dc3e-41f2-a18f-1b4d7ba71679",
        "owner_uuid": "99525febec065ca37b2ffe4f852fd2b2581895e7",
        "owner_id": 2,
        "name": "my-web-api",
        "description": "My website API",
        "purpose": "Service or API",
        "environment": "Production",
        "is_default": false,
        "created_at": "2018-09-27T20:10:35Z",
        "updated_at": "2018-09-27T20:10:35Z"
      }
    ],
    "links": {
      "pages": {
        "first": "https://api.digitalocean.com/v2/projects?page=1",
        "last": "https://api.digitalocean.com/v2/projects?page=1"
      }
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
