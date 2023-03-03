export const endpoint = '/apps';

export const default_input = {
  page: Math.random(),
  per_page: Math.random(),
};

export const default_output = Math.random();

export const httpClient = {
  get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
};

export const context = {
  httpClient,
} as any;
