export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
};
export const response = {
  "body": {
    "domain": {
      "name": "example.com",
      "ttl": 1800,
      "zone_file": "$ORIGIN example.com.\n$TTL 1800\nexample.com. IN SOA ns1.digitalocean.com. hostmaster.example.com. 1415982609 10800 3600 604800 1800\nexample.com. 1800 IN NS ns1.digitalocean.com.\nexample.com. 1800 IN NS ns2.digitalocean.com.\nexample.com. 1800 IN NS ns3.digitalocean.com.\nexample.com. 1800 IN A 1.2.3.4\n"
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
