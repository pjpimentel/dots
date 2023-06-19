import { enableDropletPrivateNetworking } from './enable-droplet-private-networking';

describe('enable-droplet-private-networking', () => {
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
    expect(typeof enableDropletPrivateNetworking).toBe('function');
    expect(typeof enableDropletPrivateNetworking(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _enableDropletPrivateNetworking = enableDropletPrivateNetworking(context);
    await _enableDropletPrivateNetworking(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      ...default_input,
      type: 'enable_private_networking',
      droplet_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _enableDropletPrivateNetworking = enableDropletPrivateNetworking(context);
    const output = await _enableDropletPrivateNetworking(default_input);

    expect(output).toBe(default_output);
  });
});
