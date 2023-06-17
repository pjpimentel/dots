import { resetDropletPassword } from './reset-droplet-password';

describe('reset-droplet-password', () => {
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
    expect(typeof resetDropletPassword ).toBe('function');
    expect(typeof resetDropletPassword (context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _resetDropletPassword   = resetDropletPassword  (context);
    await _resetDropletPassword  (default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      ...default_input,
      type: 'password_reset',
      droplet_id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _resetDropletPassword   = resetDropletPassword  (context);
    const output = await _resetDropletPassword (default_input);

    expect(output).toBe(default_output);
  });
});
