import { resizeDroplet } from './resize-droplet';

describe('resize-droplet', () => {
  const default_input = {
    droplet_id: Math.random(),
    disk: Math.random(),
    size: Math.random(),
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
    expect(typeof resizeDroplet).toBe('function');
    expect(typeof resizeDroplet(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _resizeDroplet = resizeDroplet(context);
    await _resizeDroplet(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      ...default_input,
      type: 'resize',
      droplet_id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _resizeDroplet = resizeDroplet(context);
    const output = await _resizeDroplet(default_input);

    expect(output).toBe(default_output);
  });
});
