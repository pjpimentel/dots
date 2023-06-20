import { renameDroplet } from './rename-droplet';

describe('rename-droplet', () => {
  const default_input = {
    droplet_id: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
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
    expect(typeof renameDroplet ).toBe('function');
    expect(typeof renameDroplet (context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _renameDroplet   = renameDroplet  (context);
    await _renameDroplet  (default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      ...default_input,
      type: 'rename',
      droplet_id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _renameDroplet   = renameDroplet  (context);
    const output = await _renameDroplet (default_input);

    expect(output).toBe(default_output);
  });
});
