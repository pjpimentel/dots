import { createFloatingIp } from './create-floating-ip';

describe('create-floating-ip', () => {
  const default_input = {
    droplet_id: require('crypto').randomBytes(2),
    region: require('crypto').randomBytes(2),
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
    expect(typeof createFloatingIp).toBe('function');
    expect(typeof createFloatingIp(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createFloatingIp = createFloatingIp(context);
    await _createFloatingIp(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/floating_ips`, default_input);
  });

  it('should output axios response', async () => {
    const _createFloatingIp = createFloatingIp(context);
    const output = await _createFloatingIp(default_input);

    expect(output).toBe(default_output);
  });
});
