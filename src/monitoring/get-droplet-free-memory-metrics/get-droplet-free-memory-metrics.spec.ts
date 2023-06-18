import {getDropletFreeMemoryMetrics} from './get-droplet-free-memory-metrics';

describe('get-droplet-free-memory-metrics', () => {
  const endpoint = '/monitoring/metrics/droplet/memory_free';

  const default_input = {
    end: Math.random(),
    host_id: Math.random(),
    start: Math.random(),
  };

  const default_output = Math.random();

  const httpClient = {
    get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof getDropletFreeMemoryMetrics).toBe('function');
    expect(typeof getDropletFreeMemoryMetrics(context)).toBe('function');
  });

  it('should send valid http request', async () => {
    const _getDropletFreeMemoryMetrics = getDropletFreeMemoryMetrics(context);

    await _getDropletFreeMemoryMetrics(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(endpoint, {
      params: default_input,
    });
  });

  it('should output axios response', async () => {
    const _getDropletFreeMemoryMetrics = getDropletFreeMemoryMetrics(context);

    const output = await _getDropletFreeMemoryMetrics(default_input);

    expect(output).toBe(default_output);
  });
});
