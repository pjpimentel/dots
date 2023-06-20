import { assignIpToDroplet } from './assign-ip-to-droplet';

describe('assign-ip-to-droplet', () => {
  const default_input = {
    ip: require('crypto').randomBytes(2),
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
    expect(typeof assignIpToDroplet).toBe('function');
    expect(typeof assignIpToDroplet(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _assignIpToDroplet = assignIpToDroplet(context);
    await _assignIpToDroplet(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/floating_ips/${default_input.ip}/actions`, {
      ...default_input,
      ip: undefined,
      type: 'assign'
    });
  });

  it('should output axios response', async () => {
    const _assignIpToDroplet = assignIpToDroplet(context);
    const output = await _assignIpToDroplet(default_input);

    expect(output).toBe(default_output);
  });
});
