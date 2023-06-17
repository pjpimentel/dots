import { rebuildDroplet } from './rebuild-droplet';

describe('rebuild-droplet', () => {
  const default_input = {
    droplet_id: Math.random(),
    image: Math.random(),
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
    expect(typeof rebuildDroplet).toBe('function');
    expect(typeof rebuildDroplet(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _rebuildDroplet = rebuildDroplet(context);
    await _rebuildDroplet(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      ...default_input,
      type: 'rebuild',
      droplet_id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _rebuildDroplet = rebuildDroplet(context);
    const output = await _rebuildDroplet(default_input);

    expect(output).toBe(default_output);
  });
});
