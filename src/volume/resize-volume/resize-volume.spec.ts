import { resizeVolume } from './resize-volume';

describe('resize-volume', () => {
  const default_input = {
    region: require('crypto').randomBytes(2),
    size_gigabytes: require('crypto').randomBytes(2),
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
    expect(typeof resizeVolume).toBe('function');
    expect(typeof resizeVolume(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _resizeVolume = resizeVolume(context);
    await _resizeVolume(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/volumes/${default_input.volume_id}/actions`, {
      ...default_input,
      type: 'resize',
      volume_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _resizeVolume = resizeVolume(context);
    const output = await _resizeVolume(default_input);

    expect(output).toBe(default_output);
  });
});
