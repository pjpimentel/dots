import { powerCycleDroplet } from './power-cycle-droplet';

describe('power-cycle-droplet', () => {
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
    expect(typeof powerCycleDroplet).toBe('function');
    expect(typeof powerCycleDroplet(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _powerCycleDroplet = powerCycleDroplet(context);
    await _powerCycleDroplet(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      ...default_input,
      type: 'power_cycle',
      droplet_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _powerCycleDroplet = powerCycleDroplet(context);
    const output = await _powerCycleDroplet(default_input);

    expect(output).toBe(default_output);
  });
});
