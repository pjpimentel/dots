import {getDropletCpuMetrics} from './get-droplet-cpu-metrics';

describe('get-droplet-cpu-metrics', () => {
  const endpoint = '/monitoring/metrics/droplet/cpu';

  const default_input = {
    host_id: Math.random(),
    start: Math.random(),
    end: Math.random(),
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
    expect(typeof getDropletCpuMetrics).toBe('function');
    expect(typeof getDropletCpuMetrics(context)).toBe('function');
  });

  it('should send valid http request', async () => {
    const _getDropletCpuMetrics = getDropletCpuMetrics(context);

    await _getDropletCpuMetrics(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(endpoint, {
      params: default_input
    });
  });

  it('should output axios response', async () => {
    const _getDropletCpuMetrics = getDropletCpuMetrics(context);

    const output = await _getDropletCpuMetrics(default_input);

    expect(output).toBe(default_output);
  });
});
