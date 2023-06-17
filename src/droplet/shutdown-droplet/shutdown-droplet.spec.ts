import { shutdownDroplet } from './shutdown-droplet';

describe('shutdown-droplet', () => {
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
    expect(typeof shutdownDroplet).toBe('function');
    expect(typeof shutdownDroplet (context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _shutdownDroplet = shutdownDroplet(context);
    await _shutdownDroplet(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      ...default_input,
      type: 'shutdown',
      droplet_id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _shutdownDroplet = shutdownDroplet(context);
    const output = await _shutdownDroplet (default_input);

    expect(output).toBe(default_output);
  });
});
