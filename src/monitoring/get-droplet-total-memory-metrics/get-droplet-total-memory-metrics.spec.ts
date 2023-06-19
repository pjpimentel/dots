import {getDropletTotalMemoryMetrics} from './get-droplet-total-memory-metrics';

describe('get-droplet-total-memory-metrics', () => {
  const endpoint = '/monitoring/metrics/droplet/memory_total';

  const default_input = {
    end: require('crypto').randomBytes(2),
    host_id: require('crypto').randomBytes(2),
    start: require('crypto').randomBytes(2),
  };

  const default_output = require('crypto').randomBytes(2);

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
    expect(typeof getDropletTotalMemoryMetrics).toBe('function');
    expect(typeof getDropletTotalMemoryMetrics(context)).toBe('function');
  });

  it('should send valid http request', async () => {
    const _getDropletTotalMemoryMetrics = getDropletTotalMemoryMetrics(context);

    await _getDropletTotalMemoryMetrics(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(endpoint, {
      params: default_input,
    });
  });

  it('should output axios response', async () => {
    const _getDropletTotalMemoryMetrics = getDropletTotalMemoryMetrics(context);

    const output = await _getDropletTotalMemoryMetrics(default_input);

    expect(output).toBe(default_output);
  });
});
