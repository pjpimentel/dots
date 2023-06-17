import { restoreDroplet } from './restore-droplet';

describe('restore-droplet', () => {
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
    expect(typeof restoreDroplet).toBe('function');
    expect(typeof restoreDroplet (context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _restoreDroplet = restoreDroplet(context);
    await _restoreDroplet(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      ...default_input,
      type: 'restore',
      droplet_id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _restoreDroplet = restoreDroplet(context);
    const output = await _restoreDroplet (default_input);

    expect(output).toBe(default_output);
  });
});
