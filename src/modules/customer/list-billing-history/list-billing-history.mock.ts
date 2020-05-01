export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
};
export const response = {
  "body": {
    "billing_history": [
      {
        "description": "Invoice for May 2018",
        "amount": "12.34",
        "invoice_id": "123",
        "invoice_uuid": "example-uuid",
        "date": "2018-06-01T08:44:38Z",
        "type": "Invoice"
      },
      {
        "description": "Payment (MC 2018)",
        "amount": "-12.34",
        "date": "2018-06-02T08:44:38Z",
        "type": "Payment"
      }
    ],
    "links": {
      "pages": {
        "next": "https://api.digitalocean.com/v2/customers/my/billing_history?page=2&per_page=2",
        "last": "https://api.digitalocean.com/v2/customers/my/billing_history?page=3&per_page=2"
      }
    },
    "meta": {
      "total": 5
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
