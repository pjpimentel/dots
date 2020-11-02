export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
};
export const response = {
  "body": {
    "invoices": [
      {
        "invoice_uuid": "22737513-0ea7-4206-8ceb-98a575af7681",
        "amount": "12.34",
        "invoice_period": "2019-12"
      },
      {
        "invoice_uuid": "fdabb512-6faf-443c-ba2e-665452332a9e",
        "amount": "23.45",
        "invoice_period": "2019-11"
      }
    ],
    "invoice_preview": {
      "invoice_uuid": "1afe95e6-0958-4eb0-8d9a-9c5060d3ef03",
      "amount": "34.56",
      "invoice_period": "2020-02",
      "updated_at": "2020-02-23T06:31:50Z"
    },
    "links": {
      "pages": {
        "next": "https://api.digitalocean.com/v2/customers/my/invoices?page=2&per_page=2",
        "last": "https://api.digitalocean.com/v2/customers/my/invoices?page=35&per_page=2"
      }
    },
    "meta": {
      "total": 70
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
