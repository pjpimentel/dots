import { powerOnDroplet } from './power-on-droplet';

describe('power-on-droplet', () => {
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
    expect(typeof powerOnDroplet).toBe('function');
    expect(typeof powerOnDroplet(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _powerOnDroplet = powerOnDroplet(context);
    await _powerOnDroplet(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      ...default_input,
      type: 'power_on',
      droplet_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _powerOnDroplet = powerOnDroplet(context);
    const output = await _powerOnDroplet(default_input);

    expect(output).toBe(default_output);
  });
});
