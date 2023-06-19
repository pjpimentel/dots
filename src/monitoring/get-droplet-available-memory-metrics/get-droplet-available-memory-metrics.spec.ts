import {getDropletAvailableMemoryMetrics} from './get-droplet-available-memory-metrics';

describe('get-droplet-available-memory-metrics', () => {
  const endpoint = '/monitoring/metrics/droplet/memory_available';

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
    expect(typeof getDropletAvailableMemoryMetrics).toBe('function');
    expect(typeof getDropletAvailableMemoryMetrics(context)).toBe('function');
  });

  it('should send valid http request', async () => {
    const _getDropletAvailableMemoryMetrics = getDropletAvailableMemoryMetrics(context);

    await _getDropletAvailableMemoryMetrics(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(endpoint, {
      params: default_input,
    });
  });

  it('should output axios response', async () => {
    const _getDropletAvailableMemoryMetrics = getDropletAvailableMemoryMetrics(context);

    const output = await _getDropletAvailableMemoryMetrics(default_input);

    expect(output).toBe(default_output);
  });
});
