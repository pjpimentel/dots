import {getDropletBandwidthMetrics} from './get-droplet-bandwidth-metrics';
import * as MOCK from './get-droplet-bandwidth-metrics.mock';

describe('get-droplet-bandwidth-metrics', () => {
  beforeEach(() => {
    MOCK.httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof getDropletBandwidthMetrics).toBe('function');
    expect(typeof getDropletBandwidthMetrics(MOCK.context)).toBe('function');
  });

  it('should send valid http request', async () => {
    const _getDropletBandwidthMetrics = getDropletBandwidthMetrics(MOCK.context);

    await _getDropletBandwidthMetrics(MOCK.default_input);

    expect(MOCK.httpClient.get).toHaveBeenCalledWith(MOCK.endpoint, {
      params: {
        direction: MOCK.default_input.traffic_direction,
        end: MOCK.default_input.end,
        host_id: MOCK.default_input.host_id,
        interface: MOCK.default_input.network_interface,
        start: MOCK.default_input.start,
      }
    });
  });

  it('should output axios response', async () => {
    const _getDropletBandwidthMetrics = getDropletBandwidthMetrics(MOCK.context);

    const output = await _getDropletBandwidthMetrics(MOCK.default_input);

    expect(output).toBe(MOCK.default_output);
  });
});
