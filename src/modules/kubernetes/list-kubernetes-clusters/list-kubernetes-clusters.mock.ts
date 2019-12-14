export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
};
export const response = {
    "body": {
      "kubernetes_clusters": [
        {
          "id": "bd5f5959-5e1e-4205-a714-a914373942af",
          "name": "prod-cluster-01",
          "region": "nyc1",
          "version": "1.14.1-do.4",
          "cluster_subnet": "10.244.0.0/16",
          "service_subnet": "10.245.0.0/16",
          "ipv4": "68.183.121.157",
          "endpoint": "https://bd5f5959-5e1e-4205-a714-a914373942af.k8s.ondigitalocean.com",
          "tags": [
            "production",
            "web-team",
            "k8s",
            "k8s:bd5f5959-5e1e-4205-a714-a914373942af"
          ],
          "node_pools": [
            {
              "id": "cdda885e-7663-40c8-bc74-3a036c66545d",
              "name": "frontend-pool",
              "size": "s-1vcpu-2gb",
              "count": 3,
              "tags": [
                "production",
                "web-team",
                "k8s",
                "k8s:bd5f5959-5e1e-4205-a714-a914373942af",
                "k8s:worker"
              ],
              "nodes": [
                {
                  "id": "478247f8-b1bb-4f7a-8db9-2a5f8d4b8f8f",
                  "name": "adoring-newton-3niq",
                  "status": {
                    "state": "provisioning"
                  },
                  "created_at": "2018-11-15T16:00:11Z",
                  "updated_at": "2018-11-15T16:00:11Z"
                },
                {
                  "id": "ad12e744-c2a9-473d-8aa9-be5680500eb1",
                  "name": "adoring-newton-3nim",
                  "status": {
                    "state": "provisioning"
                  },
                  "created_at": "2018-11-15T16:00:11Z",
                  "updated_at": "2018-11-15T16:00:11Z"
                },
                {
                  "id": "e46e8d07-f58f-4ff1-9737-97246364400e",
                  "name": "adoring-newton-3ni7",
                  "status": {
                    "state": "provisioning"
                  },
                  "created_at": "2018-11-15T16:00:11Z",
                  "updated_at": "2018-11-15T16:00:11Z"
                }
              ]
            },
            {
              "id": "f49f4379-7e7f-4af5-aeb6-0354bd840778",
              "name": "backend-pool",
              "size": "c-4",
              "count": 2,
              "tags": [
                "production",
                "web-team",
                "k8s",
                "k8s:bd5f5959-5e1e-4205-a714-a914373942af",
                "k8s:worker"
              ],
              "nodes": [
                {
                  "id": "3385619f-8ec3-42ba-bb23-8d21b8ba7518",
                  "name": "affectionate-nightingale-3nif",
                  "status": {
                    "state": "provisioning"
                  },
                  "created_at": "2018-11-15T16:00:11Z",
                  "updated_at": "2018-11-15T16:00:11Z"
                },
                {
                  "id": "4b8f60ff-ba06-4523-a6a4-b8148244c7e6",
                  "name": "affectionate-nightingale-3niy",
                  "status": {
                    "state": "provisioning"
                  },
                  "created_at": "2018-11-15T16:00:11Z",
                  "updated_at": "2018-11-15T16:00:11Z"
                }
              ]
            }
          ],
          "maintenance_policy": {
            "start_time": "00:00",
            "duration": "4h0m0s",
            "day": "any"
          },
          "auto_upgrade": false,
          "status": {
            "state": "provisioning",
            "message": "provisioning"
          },
          "created_at": "2018-11-15T16:00:11Z",
          "updated_at": "2018-11-15T16:00:11Z"
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
