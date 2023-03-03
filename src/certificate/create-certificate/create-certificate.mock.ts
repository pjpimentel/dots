export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
  "body": {
    "name": "web-cert-01",
    "type": "custom",
    "private_key": `${Math.random()}`,
    "leaf_certificate": `${Math.random()}`,
    "certificate_chain": `${Math.random()}`
  },
  "bodyLetsEncrypt": {
    "name": "le-cert-01",
    "type": "lets_encrypt",
    "dns_names": [
      "www.example.com",
      "example.com"
    ]
  },
};
export const response = {
    "body": {
      "certificate": {
        "id": "892071a0-bb95-49bc-8021-3afd67a210bf",
        "name": "web-cert-01",
        "not_after": "2017-02-22T00:23:00Z",
        "sha1_fingerprint": "dfcc9f57d86bf58e321c2c6c31c7a971be244ac7",
        "created_at": "2017-02-08T16:02:37Z",
        "dns_names": [
          ""
        ],
        "state": "verified",
        "type": "custom"
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
