import {getDropletBandwidthMetrics} from './get-droplet-bandwidth-metrics';

describe('get-droplet-bandwidth-metrics', () => {
  const endpoint = '/monitoring/metrics/droplet/bandwidth';

  const default_input = {
    end: require('crypto').randomBytes(2),
    host_id: require('crypto').randomBytes(2),
    network_interface: `${require('crypto').randomBytes(2)}`,
    start: require('crypto').randomBytes(2),
    traffic_direction: `${require('crypto').randomBytes(2)}`,
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
