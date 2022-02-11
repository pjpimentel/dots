export const endpoint = '/monitoring/metrics/droplet/cpu';

export const default_input = {
  host_id: Math.random(),
  start: Math.random(),
  end: Math.random(),
};

export const default_output = Math.random();

export const httpClient = {
  get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
};

export const context = {
  httpClient,
} as any;
