import { enableDropletIpv6 } from './enable-droplet-ipv6';

describe('enable-droplet-ipv6', () => {
  const default_input = {
    droplet_id: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    post: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.post.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof enableDropletIpv6).toBe('function');
    expect(typeof enableDropletIpv6(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _enableDropletIpv6 = enableDropletIpv6(context);
    await _enableDropletIpv6(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      ...default_input,
      type: 'enable_ipv6',
      droplet_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _enableDropletIpv6 = enableDropletIpv6(context);
    const output = await _enableDropletIpv6(default_input);

    expect(output).toBe(default_output);
  });
});
