export const endpoint = '/apps';

export const default_input = {
  spec: {
    name: `${Math.random()}`,
  },
};

export const default_output = Math.random();

export const httpClient = {
  post: jest.fn().mockReturnValue(Promise.resolve(default_output)),
};

export const context = {
  httpClient,
} as any;
