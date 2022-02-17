import {getDropletCpuMetrics} from './get-droplet-cpu-metrics';
import * as MOCK from './get-droplet-cpu-metrics.mock';

describe('get-droplet-cpu-metrics', () => {
  beforeEach(() => {
    MOCK.httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof getDropletCpuMetrics).toBe('function');
    expect(typeof getDropletCpuMetrics(MOCK.context)).toBe('function');
  });

  it('should send valid http request', async () => {
    const _getDropletCpuMetrics = getDropletCpuMetrics(MOCK.context);

    await _getDropletCpuMetrics(MOCK.default_input);

    expect(MOCK.httpClient.get).toHaveBeenCalledWith(MOCK.endpoint, {
      params: MOCK.default_input
    });
  });

  it('should output axios response', async () => {
    const _getDropletCpuMetrics = getDropletCpuMetrics(MOCK.context);

    const output = await _getDropletCpuMetrics(MOCK.default_input);

    expect(output).toBe(MOCK.default_output);
  });
});
