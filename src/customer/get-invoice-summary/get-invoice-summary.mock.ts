export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
};
export const response = {
    "body": {
      "invoice_uuid": "22737513-0ea7-4206-8ceb-98a575af7681",
      "billing_period": "2020-01",
      "amount": "27.13",
      "user_name": "Sammy Shark",
      "user_billing_address": {
        "address_line1": "101 Shark Row",
        "city": "Atlantis",
        "region": "OC",
        "postal_code": "12345",
        "country_iso2_code": "US",
        "created_at": "2019-09-03T16:34:46.000+00:00",
        "updated_at": "2019-09-03T16:34:46.000+00:00"
      },
      "user_company": "DigitalOcean",
      "user_email": "sammy@digitalocean.com",
      "product_charges": {
        "name": "Product usage charges",
        "amount": "12.34",
        "items": [
          {
            "amount": "10.00",
            "name": "Spaces Subscription",
            "count": "1"
          },
          {
            "amount": "2.34",
            "name": "Database Clusters",
            "count": "1"
          }
        ]
      },
      "overages": {
        "name": "Overages",
        "amount": "3.45"
      },
      "taxes": {
        "name": "Taxes",
        "amount": "4.56"
      },
      "credits_and_adjustments": {
        "name": "Credits & adjustments",
        "amount": "6.78"
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
