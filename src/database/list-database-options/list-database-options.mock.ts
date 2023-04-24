export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
};
export const response = {
  "body": {
    "options": {
      "mongodb": {
        "regions": [
          "ams3",
          "blr1",
          "fra1",
          "lon1",
          "nyc1",
          "nyc3",
          "sfo3",
          "sgp1",
          "syd1",
          "tor1"
        ],
        "versions": [
          "4.4",
          "5.0",
          "6.0"
        ],
        "layouts": [
          {
            "num_nodes": 1,
            "sizes": [
              "db-s-1vcpu-1gb",
              "db-s-1vcpu-2gb",
              "db-s-2vcpu-4gb",
              "db-s-4vcpu-8gb",
              "db-s-6vcpu-16gb",
              "db-s-8vcpu-32gb",
              "db-s-16vcpu-64gb",
              "gd-2vcpu-8gb",
              "gd-4vcpu-16gb",
              "gd-8vcpu-32gb",
              "gd-16vcpu-64gb",
              "gd-32vcpu-128gb",
              "gd-40vcpu-160gb",
              "so1_5-2vcpu-16gb",
              "so1_5-4vcpu-32gb",
              "so1_5-8vcpu-64gb",
              "so1_5-16vcpu-128gb",
              "so1_5-24vcpu-192gb",
              "so1_5-32vcpu-256gb"
            ]
          },
          {
            "num_nodes": 3,
            "sizes": [
              "db-s-1vcpu-1gb",
              "db-s-1vcpu-2gb",
              "db-s-2vcpu-4gb",
              "db-s-4vcpu-8gb",
              "db-s-6vcpu-16gb",
              "db-s-8vcpu-32gb",
              "db-s-16vcpu-64gb",
              "gd-2vcpu-8gb",
              "gd-4vcpu-16gb",
              "gd-8vcpu-32gb",
              "gd-16vcpu-64gb",
              "gd-32vcpu-128gb",
              "gd-40vcpu-160gb",
              "so1_5-2vcpu-16gb",
              "so1_5-4vcpu-32gb",
              "so1_5-8vcpu-64gb",
              "so1_5-16vcpu-128gb",
              "so1_5-24vcpu-192gb",
              "so1_5-32vcpu-256gb"
            ]
          }
        ]
      },
      "mysql": {
        "regions": [
          "ams3",
          "blr1",
          "fra1",
          "lon1",
          "nyc1",
          "nyc3",
          "sfo2",
          "sfo3",
          "sgp1",
          "syd1",
          "tor1"
        ],
        "versions": [
          "8"
        ],
        "layouts": [
          {
            "num_nodes": 1,
            "sizes": [
              "db-s-1vcpu-1gb",
              "db-s-1vcpu-2gb",
              "db-s-2vcpu-4gb",
              "db-s-4vcpu-8gb",
              "db-s-6vcpu-16gb",
              "db-s-8vcpu-32gb",
              "gd-2vcpu-8gb",
              "gd-4vcpu-16gb",
              "gd-8vcpu-32gb",
              "gd-16vcpu-64gb",
              "gd-32vcpu-128gb",
              "gd-40vcpu-160gb",
              "so1_5-2vcpu-16gb",
              "so1_5-4vcpu-32gb",
              "so1_5-8vcpu-64gb",
              "so1_5-16vcpu-128gb",
              "so1_5-24vcpu-192gb",
              "so1_5-32vcpu-256gb"
            ]
          },
          {
            "num_nodes": 2,
            "sizes": [
              "db-s-1vcpu-2gb",
              "db-s-2vcpu-4gb",
              "db-s-4vcpu-8gb",
              "db-s-6vcpu-16gb",
              "db-s-8vcpu-32gb",
              "db-s-16vcpu-64gb",
              "gd-2vcpu-8gb",
              "gd-4vcpu-16gb",
              "gd-8vcpu-32gb",
              "gd-16vcpu-64gb",
              "gd-32vcpu-128gb",
              "gd-40vcpu-160gb",
              "so1_5-2vcpu-16gb",
              "so1_5-4vcpu-32gb",
              "so1_5-8vcpu-64gb",
              "so1_5-16vcpu-128gb",
              "so1_5-24vcpu-192gb",
              "so1_5-32vcpu-256gb"
            ]
          },
          {
            "num_nodes": 3,
            "sizes": [
              "db-s-1vcpu-2gb",
              "db-s-2vcpu-4gb",
              "db-s-4vcpu-8gb",
              "db-s-6vcpu-16gb",
              "db-s-8vcpu-32gb",
              "db-s-16vcpu-64gb",
              "gd-2vcpu-8gb",
              "gd-4vcpu-16gb",
              "gd-8vcpu-32gb",
              "gd-16vcpu-64gb",
              "gd-32vcpu-128gb",
              "gd-40vcpu-160gb",
              "so1_5-2vcpu-16gb",
              "so1_5-4vcpu-32gb",
              "so1_5-8vcpu-64gb",
              "so1_5-16vcpu-128gb",
              "so1_5-24vcpu-192gb",
              "so1_5-32vcpu-256gb"
            ]
          }
        ]
      },
      "pg": {
        "regions": [
          "ams3",
          "blr1",
          "fra1",
          "lon1",
          "nyc1",
          "nyc3",
          "sfo2",
          "sfo3",
          "sgp1",
          "syd1",
          "tor1"
        ],
        "versions": [
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "layouts": [
          {
            "num_nodes": 1,
            "sizes": [
              "db-s-1vcpu-1gb",
              "db-s-1vcpu-2gb",
              "db-s-2vcpu-4gb",
              "db-s-4vcpu-8gb",
              "db-s-6vcpu-16gb",
              "db-s-8vcpu-32gb",
              "gd-2vcpu-8gb",
              "gd-4vcpu-16gb",
              "gd-8vcpu-32gb",
              "gd-16vcpu-64gb",
              "gd-32vcpu-128gb",
              "gd-40vcpu-160gb",
              "so1_5-2vcpu-16gb",
              "so1_5-4vcpu-32gb",
              "so1_5-8vcpu-64gb",
              "so1_5-16vcpu-128gb",
              "so1_5-24vcpu-192gb",
              "so1_5-32vcpu-256gb"
            ]
          },
          {
            "num_nodes": 2,
            "sizes": [
              "db-s-1vcpu-2gb",
              "db-s-2vcpu-4gb",
              "db-s-4vcpu-8gb",
              "db-s-6vcpu-16gb",
              "db-s-8vcpu-32gb",
              "db-s-16vcpu-64gb",
              "gd-2vcpu-8gb",
              "gd-4vcpu-16gb",
              "gd-8vcpu-32gb",
              "gd-16vcpu-64gb",
              "gd-32vcpu-128gb",
              "gd-40vcpu-160gb",
              "so1_5-2vcpu-16gb",
              "so1_5-4vcpu-32gb",
              "so1_5-8vcpu-64gb",
              "so1_5-16vcpu-128gb",
              "so1_5-24vcpu-192gb",
              "so1_5-32vcpu-256gb"
            ]
          },
          {
            "num_nodes": 3,
            "sizes": [
              "db-s-1vcpu-2gb",
              "db-s-2vcpu-4gb",
              "db-s-4vcpu-8gb",
              "db-s-6vcpu-16gb",
              "db-s-8vcpu-32gb",
              "db-s-16vcpu-64gb",
              "gd-2vcpu-8gb",
              "gd-4vcpu-16gb",
              "gd-8vcpu-32gb",
              "gd-16vcpu-64gb",
              "gd-32vcpu-128gb",
              "gd-40vcpu-160gb",
              "so1_5-2vcpu-16gb",
              "so1_5-4vcpu-32gb",
              "so1_5-8vcpu-64gb",
              "so1_5-16vcpu-128gb",
              "so1_5-24vcpu-192gb",
              "so1_5-32vcpu-256gb"
            ]
          }
        ]
      },
      "redis": {
        "regions": [
          "ams3",
          "blr1",
          "fra1",
          "lon1",
          "nyc1",
          "nyc3",
          "sfo2",
          "sfo3",
          "sgp1",
          "syd1",
          "tor1"
        ],
        "versions": [
          "7"
        ],
        "layouts": [
          {
            "num_nodes": 1,
            "sizes": [
              "db-s-1vcpu-1gb",
              "db-s-1vcpu-2gb",
              "db-s-2vcpu-4gb",
              "db-s-4vcpu-8gb",
              "db-s-6vcpu-16gb",
              "db-s-8vcpu-32gb",
              "db-s-16vcpu-64gb",
              "m-2vcpu-16gb",
              "m-4vcpu-32gb",
              "m-8vcpu-64gb",
              "m-16vcpu-128gb",
              "m-24vcpu-192gb",
              "m-32vcpu-256gb"
            ]
          },
          {
            "num_nodes": 2,
            "sizes": [
              "db-s-1vcpu-2gb",
              "db-s-2vcpu-4gb",
              "db-s-4vcpu-8gb",
              "db-s-6vcpu-16gb",
              "db-s-8vcpu-32gb",
              "db-s-16vcpu-64gb",
              "m-2vcpu-16gb",
              "m-4vcpu-32gb",
              "m-8vcpu-64gb",
              "m-16vcpu-128gb",
              "m-24vcpu-192gb",
              "m-32vcpu-256gb"
            ]
          }
        ]
      }
    },
    "version_availability": {
      "mongodb": [
        {
          "end_of_life": "2024-02-01T08:00:00Z",
          "end_of_availability": null,
          "version": "4.4"
        },
        {
          "end_of_life": "2024-10-01T07:00:00Z",
          "end_of_availability": null,
          "version": "5.0"
        },
        {
          "end_of_life": "2025-07-01T07:00:00Z",
          "end_of_availability": null,
          "version": "6.0"
        }
      ],
      "mysql": [
        {
          "end_of_life": null,
          "end_of_availability": null,
          "version": "8"
        }
      ],
      "pg": [
        {
          "end_of_life": "2023-11-09T00:00:00Z",
          "end_of_availability": "2023-05-09T00:00:00Z",
          "version": "11"
        },
        {
          "end_of_life": "2024-11-14T00:00:00Z",
          "end_of_availability": "2024-05-14T00:00:00Z",
          "version": "12"
        },
        {
          "end_of_life": "2025-11-13T00:00:00Z",
          "end_of_availability": "2025-05-13T00:00:00Z",
          "version": "13"
        },
        {
          "end_of_life": "2026-11-12T00:00:00Z",
          "end_of_availability": "2026-05-12T00:00:00Z",
          "version": "14"
        },
        {
          "end_of_life": "2027-11-11T00:00:00Z",
          "end_of_availability": "2027-05-12T00:00:00Z",
          "version": "15"
        }
      ],
      "redis": [
        {
          "end_of_life": null,
          "end_of_availability": null,
          "version": "7"
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
  }
};
