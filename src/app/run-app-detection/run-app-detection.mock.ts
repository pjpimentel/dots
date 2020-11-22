export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
  "body":{
    "github": {
      "repo": "digitalocean/sample-golang",
      "branch": "master"
    }
  },
};
export const response = {
  "body":{
    "components": [
      {
        "strategy": "BUILDPACK",
        "types": [
          "service",
          "static_site",
          "worker",
          "job"
        ],
        "run_command": "bin/sample-golang",
        "environment_slug": "go"
      }
    ]
  },
  "headers": {
    "content-type": "application/json; charset=utf-8",
    "status": 200,
    "ratelimit-limit": 1200,
    "ratelimit-remaining": 1137,
    "ratelimit-reset": 1415984218
  },
};
