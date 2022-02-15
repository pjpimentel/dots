export const endpoint = '/monitoring/metrics/droplet/bandwidth';

export const default_input = {
  end: Math.random(),
  host_id: Math.random(),
  network_interface: `${Math.random()}`,
  start: Math.random(),
  traffic_direction: `${Math.random()}`,
};

export const default_output = Math.random();

export const httpClient = {
  get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
};

export const context = {
  httpClient,
} as any;
