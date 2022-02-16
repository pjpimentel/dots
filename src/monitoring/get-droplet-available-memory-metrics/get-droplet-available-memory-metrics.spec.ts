import {getDropletAvailableMemoryMetrics} from './get-droplet-available-memory-metrics';
import * as MOCK from './get-droplet-available-memory-metrics.mock';

describe('get-droplet-available-memory-metrics', () => {
  beforeEach(() => {
    MOCK.httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof getDropletAvailableMemoryMetrics).toBe('function');
    expect(typeof getDropletAvailableMemoryMetrics(MOCK.context)).toBe('function');
  });

  it('should send valid http request', async () => {
    const _getDropletAvailableMemoryMetrics = getDropletAvailableMemoryMetrics(MOCK.context);

    await _getDropletAvailableMemoryMetrics(MOCK.default_input);

    expect(MOCK.httpClient.get).toHaveBeenCalledWith(MOCK.endpoint, {
      params: MOCK.default_input,
    });
  });

  it('should output axios response', async () => {
    const _getDropletAvailableMemoryMetrics = getDropletAvailableMemoryMetrics(MOCK.context);

    const output = await _getDropletAvailableMemoryMetrics(MOCK.default_input);

    expect(output).toBe(MOCK.default_output);
  });
});
