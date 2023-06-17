import { powerOffDroplet } from './power-off-droplet';

describe('power-off-droplet', () => {
  const default_input = {
    droplet_id: Math.random(),
  } as any;
  const default_output = Math.random();

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
    expect(typeof powerOffDroplet).toBe('function');
    expect(typeof powerOffDroplet(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _powerOffDroplet = powerOffDroplet(context);
    await _powerOffDroplet(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      ...default_input,
      type: 'power_off',
      droplet_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _powerOffDroplet = powerOffDroplet(context);
    const output = await _powerOffDroplet(default_input);

    expect(output).toBe(default_output);
  });
});
