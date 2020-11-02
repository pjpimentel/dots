export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
};
export const response = {
    "body": {
      "snapshots": [
        {
          "id": '6372321',
          "name": "5.10 x64",
          "regions": [
            "nyc1",
            "ams1",
            "sfo1",
            "nyc2",
            "ams2",
            "sgp1",
            "lon1",
            "nyc3",
            "ams3",
            "fra1",
            "tor1"
          ],
          "created_at": "2014-09-26T16:40:18Z",
          "resource_id": 2713828,
          "resource_type": "droplet",
          "min_disk_size": 20,
          "size_gigabytes": 1.42,
          "tags": [

          ]
        }
      ],
      "links": {
        "pages": {
          "last": "https://api.digitalocean.com/v2/snapshots?page=110&per_page=1",
          "next": "https://api.digitalocean.com/v2/snapshots?page=2&per_page=1"
        }
      },
      "meta": {
        "total": 110
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
