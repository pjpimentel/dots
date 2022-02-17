import {getDropletFreeMemoryMetrics} from './get-droplet-free-memory-metrics';
import * as MOCK from './get-droplet-free-memory-metrics.mock';

describe('get-droplet-free-memory-metrics', () => {
  beforeEach(() => {
    MOCK.httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof getDropletFreeMemoryMetrics).toBe('function');
    expect(typeof getDropletFreeMemoryMetrics(MOCK.context)).toBe('function');
  });

  it('should send valid http request', async () => {
    const _getDropletFreeMemoryMetrics = getDropletFreeMemoryMetrics(MOCK.context);

    await _getDropletFreeMemoryMetrics(MOCK.default_input);

    expect(MOCK.httpClient.get).toHaveBeenCalledWith(MOCK.endpoint, {
      params: MOCK.default_input,
    });
  });

  it('should output axios response', async () => {
    const _getDropletFreeMemoryMetrics = getDropletFreeMemoryMetrics(MOCK.context);

    const output = await _getDropletFreeMemoryMetrics(MOCK.default_input);

    expect(output).toBe(MOCK.default_output);
  });
});
