import { detachVolumeFromDroplet } from './detach-volume-from-droplet';

describe('detach-volume-from-droplet', () => {
  const default_input = {
    droplet_id: require('crypto').randomBytes(2),
    region: require('crypto').randomBytes(2),
    volume_id: require('crypto').randomBytes(2),
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
    expect(typeof detachVolumeFromDroplet).toBe('function');
    expect(typeof detachVolumeFromDroplet(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _detachVolumeFromDroplet = detachVolumeFromDroplet(context);
    await _detachVolumeFromDroplet(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/volumes/${default_input.volume_id}/actions`, {
      ...default_input,
      type: 'detach',
      volume_id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _detachVolumeFromDroplet = detachVolumeFromDroplet(context);
    const output = await _detachVolumeFromDroplet(default_input);

    expect(output).toBe(default_output);
  });
});
