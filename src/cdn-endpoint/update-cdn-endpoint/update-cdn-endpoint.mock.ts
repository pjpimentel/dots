export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
  "body": {
    "ttl": 1800,
    "certificate_id": "certificate-id",
    "custom_domain": "custom-domain"
  },
};
export const response = {
  "body": {
    "endpoint": {
      "id": "19f06b6a-3ace-4315-b086-499a0e521b76",
      "origin": "static-images.nyc3.digitaloceanspaces.com",
      "endpoint": "static-images.nyc3.cdn.digitaloceanspaces.com",
      "created_at": "2018-07-19T15:04:16Z",
      "ttl": 1800,
      "certificate_id": "892071a0-bb95-49bc-8021-3afd67a210bf",
      "custom_domain": "static.example.com"
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
