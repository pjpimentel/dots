import { retryDropletDestroy } from './retry-droplet-destroy';

describe('retry-droplet-destroy', () => {
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
    expect(typeof retryDropletDestroy).toBe('function');
    expect(typeof retryDropletDestroy (context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _retryDropletDestroy = retryDropletDestroy(context);
    await _retryDropletDestroy(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/destroy_with_associated_resources/retry`);
  });

  it('should output axios response', async () => {
    const _retryDropletDestroy = retryDropletDestroy(context);
    const output = await _retryDropletDestroy (default_input);

    expect(output).toBe(default_output);
  });
});
