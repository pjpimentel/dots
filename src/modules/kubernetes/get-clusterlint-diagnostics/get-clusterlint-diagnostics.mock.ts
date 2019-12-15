export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
};
export const response = {
    "body": {
      "run_id": "50c2f44c-011d-493e-aee5-361a4a0d1844",
      "requested_at": "2019-10-30T05:34:07Z",
      "completed_at": "2019-10-30T05:34:11Z",
      "diagnostics": [
        {
          "check_name": "unused-config-map",
          "severity": "warning",
          "message": "Unused config map",
          "object": {
            "kind": "config map",
            "name": "foo",
            "namespace": "kube-system"
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
