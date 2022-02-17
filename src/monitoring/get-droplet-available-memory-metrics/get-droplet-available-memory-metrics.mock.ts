export const endpoint = '/monitoring/metrics/droplet/memory_available';

export const default_input = {
  end: Math.random(),
  host_id: Math.random(),
  start: Math.random(),
};

export const default_output = Math.random();

export const httpClient = {
  get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
};

export const context = {
  httpClient,
} as any;
