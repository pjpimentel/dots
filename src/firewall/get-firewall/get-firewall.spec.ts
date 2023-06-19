import { getFirewall } from './get-firewall';

describe('get-firewall', () => {
  const default_input = {
    droplet_id: require('crypto').randomBytes(2),
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
    expect(typeof getFirewall).toBe('function');
    expect(typeof getFirewall(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getFirewall = getFirewall(context);
    await _getFirewall(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/firewalls/${default_input.firewall_id}`);
  });

  it('should output axios response', async () => {
    const _getFirewall = getFirewall(context);
    const output = await _getFirewall(default_input);

    expect(output).toBe(default_output);
  });
});
