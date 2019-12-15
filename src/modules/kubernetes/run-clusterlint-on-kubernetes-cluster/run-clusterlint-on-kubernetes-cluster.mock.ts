export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
  "body":{
    "include_groups": [
      "basic"
    ],
    "include_checks": [
      "bare-pods"
    ]
  },
};
export const response = {
  "body": {
    "run_id": "50c2f44c-011d-493e-aee5-361a4a0d1844"
  },
  "headers": {
    "content-type": "application/json; charset=utf-8",
    "status": 200,
    "ratelimit-limit": 1200,
    "ratelimit-remaining": 1137,
    "ratelimit-reset": 1415984218
  },
};
