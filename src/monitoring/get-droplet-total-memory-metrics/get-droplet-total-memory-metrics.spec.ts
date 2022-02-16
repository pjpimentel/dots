import {getDropletTotalMemoryMetrics} from './get-droplet-total-memory-metrics';
import * as MOCK from './get-droplet-total-memory-metrics.mock';

describe('get-droplet-total-memory-metrics', () => {
  beforeEach(() => {
    MOCK.httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof getDropletTotalMemoryMetrics).toBe('function');
    expect(typeof getDropletTotalMemoryMetrics(MOCK.context)).toBe('function');
  });

  it('should send valid http request', async () => {
    const _getDropletTotalMemoryMetrics = getDropletTotalMemoryMetrics(MOCK.context);

    await _getDropletTotalMemoryMetrics(MOCK.default_input);

    expect(MOCK.httpClient.get).toHaveBeenCalledWith(MOCK.endpoint, {
      params: MOCK.default_input,
    });
  });

  it('should output axios response', async () => {
    const _getDropletTotalMemoryMetrics = getDropletTotalMemoryMetrics(MOCK.context);

    const output = await _getDropletTotalMemoryMetrics(MOCK.default_input);

    expect(output).toBe(MOCK.default_output);
  });
});
