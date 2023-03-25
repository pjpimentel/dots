export const endpoint = '/droplets';

export const default_input = {
  page: Math.random(),
  per_page: Math.random(),
};

export const default_output = {
  data: {
    droplets: [
      Math.random(),
    ],
    links: {
      pages: {
        first: `${Math.random()}`,
        prev: `${Math.random()}`,
        last: `${Math.random()}`,
        next: `${Math.random()}`,
      }
    },
    meta: {
      total: Math.random()
    },
  },
};

export const httpClient = {
  get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
};

export const context = {
  httpClient,
} as any;
