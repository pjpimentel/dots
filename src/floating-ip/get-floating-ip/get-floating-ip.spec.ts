import { getFloatingIp } from './get-floating-ip';

describe('get-floating-ip', () => {
  const default_input = {
    ip: Math.random(),
  } as any;
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
    expect(typeof getFloatingIp).toBe('function');
    expect(typeof getFloatingIp(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getFloatingIp = getFloatingIp(context);
    await _getFloatingIp(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/floating_ips/${default_input.ip}`);
  });

  it('should output axios response', async () => {
    const _getFloatingIp = getFloatingIp(context);
    const output = await _getFloatingIp(default_input);

    expect(output).toBe(default_output);
  });
});
