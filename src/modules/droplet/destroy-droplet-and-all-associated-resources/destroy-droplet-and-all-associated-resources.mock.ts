export const request = {
  "headers": {
    "Accept": "application/json, text/plain, */*",
    "Authorization": `Bearer ${process.env.TEST_TOKEN}`,
    "Content-Type": "application/json",
    "X-Dangerous": "true",
  },
};
export const response = {
    "headers": {
      "content-type": "application/json; charset=utf-8",
      "status": 200,
      "ratelimit-limit": 1200,
      "ratelimit-remaining": 1137,
      "ratelimit-reset": 1415984218
    },
};
