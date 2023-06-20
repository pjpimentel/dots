import { rebootDroplet } from './reboot-droplet';

describe('reboot-droplet', () => {
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
    expect(typeof rebootDroplet).toBe('function');
    expect(typeof rebootDroplet(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _rebootDroplet = rebootDroplet(context);
    await _rebootDroplet(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      ...default_input,
      type: 'reboot',
      droplet_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _rebootDroplet = rebootDroplet(context);
    const output = await _rebootDroplet(default_input);

    expect(output).toBe(default_output);
  });
});
