import { getFloatingIpAction } from './get-floating-ip-action';

describe('get-floating-ip-action', () => {
  const default_input = {
    ip: require('crypto').randomBytes(2),
    action_id: require('crypto').randomBytes(2),
  } as any;
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
    expect(typeof getFloatingIpAction).toBe('function');
    expect(typeof getFloatingIpAction(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getFloatingIpAction = getFloatingIpAction(context);
    await _getFloatingIpAction(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/floating_ips/${default_input.ip}/actions/${default_input.action_id}`);
  });

  it('should output axios response', async () => {
    const _getFloatingIpAction = getFloatingIpAction(context);
    const output = await _getFloatingIpAction(default_input);

    expect(output).toBe(default_output);
  });
});
