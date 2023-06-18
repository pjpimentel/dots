import {getDropletBandwidthMetrics} from './get-droplet-bandwidth-metrics';

describe('get-droplet-bandwidth-metrics', () => {
  const endpoint = '/monitoring/metrics/droplet/bandwidth';

  const default_input = {
    end: Math.random(),
    host_id: Math.random(),
    network_interface: `${Math.random()}`,
    start: Math.random(),
    traffic_direction: `${Math.random()}`,
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
    expect(typeof getDropletBandwidthMetrics).toBe('function');
    expect(typeof getDropletBandwidthMetrics(context)).toBe('function');
  });

  it('should send valid http request', async () => {
    const _getDropletBandwidthMetrics = getDropletBandwidthMetrics(context);

    await _getDropletBandwidthMetrics(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(endpoint, {
      params: {
        direction: default_input.traffic_direction,
        end: default_input.end,
        host_id: default_input.host_id,
        interface: default_input.network_interface,
        start: default_input.start,
      }
    });
  });

  it('should output axios response', async () => {
    const _getDropletBandwidthMetrics = getDropletBandwidthMetrics(context);

    const output = await _getDropletBandwidthMetrics(default_input);

    expect(output).toBe(default_output);
  });
});
