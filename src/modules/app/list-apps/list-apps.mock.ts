export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
};
export const response = {
    "body": {
      "apps": [
        {
          "id": "b7d64052-3706-4cb7-b21a-c5a2f44e63b3",
          "spec": {
            "name": "sample-golang",
            "services": [
              {
                "name": "web",
                "github": {
                  "repo": "digitalocean/sample-golang",
                  "branch": "branch"
                },
                "run_command": "bin/sample-golang",
                "environment_slug": "go",
                "instance_size_slug": "professional-xs",
                "instance_count": 2,
                "routes": [
                  {
                    "path": "/"
                  }
                ]
              }
            ],
            "region": "ams3"
          },
          "default_ingress": "sample-golang.ondigitalocean.app",
          "created_at": "2020-07-28T18:00:00Z",
          "updated_at": "2020-07-28T18:00:00Z",
          "active_deployment": {
            "id": "b6bdf840-2854-4f87-a36c-5f231c617c84",
            "spec": {
              "name": "sample-golang",
              "services": [
                {
                  "name": "web",
                  "github": {
                    "repo": "digitalocean/sample-golang",
                    "branch": "branch"
                  },
                  "run_command": "bin/sample-golang",
                  "environment_slug": "go",
                  "instance_size_slug": "professional-xs",
                  "instance_count": 2,
                  "routes": [
                    {
                      "path": "/"
                    }
                  ]
                }
              ],
              "region": "ams3"
            },
            "services": [
              {
                "name": "web",
                "source_commit_hash": "9a4df0b8e161e323bc3cdf1dc71878080fe144fa"
              }
            ],
            "cause": "commit 9a4df0b pushed to github/digitalocean/sample-golang",
            "progress": null,
            "created_at": "2020-07-28T18:00:00Z",
            "updated_at": "2020-07-28T18:00:00Z"
          }
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
