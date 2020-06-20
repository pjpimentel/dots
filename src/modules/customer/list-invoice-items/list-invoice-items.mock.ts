export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
};
export const response = {
    "body": {
      "invoice_items": [
        {
          "product": "Kubernetes Clusters",
          "resource_uuid": "711157cb-37c8-4817-b371-44fa3504a39c",
          "group_description": "my-doks-cluster",
          "description": "a56e086a317d8410c8b4cfd1f4dc9f82",
          "amount": "12.34",
          "duration": "744",
          "duration_unit": "Hours",
          "start_time": "2020-01-01T00:00:00Z",
          "end_time": "2020-02-01T00:00:00Z"
        },
        {
          "product": "Spaces Subscription",
          "description": "Spaces ($5/mo 250GB storage & 1TB bandwidth)",
          "amount": "34.45",
          "duration": "744",
          "duration_unit": "Hours",
          "start_time": "2020-01-01T00:00:00Z",
          "end_time": "2020-02-01T00:00:00Z"
        }
      ],
      "links": {
        "pages": {
          "next": "https://api.digitalocean.com/v2/customers/my/invoices/22737513-0ea7-4206-8ceb-98a575af7681?page=2&per_page=2",
          "last": "https://api.digitalocean.com/v2/customers/my/invoices/22737513-0ea7-4206-8ceb-98a575af7681?page=3&per_page=2"
        }
      },
      "meta": {
        "total": 6
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
