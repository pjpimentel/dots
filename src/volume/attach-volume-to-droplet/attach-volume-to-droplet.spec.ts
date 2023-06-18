import { attachVolumeToDroplet } from './attach-volume-to-droplet';

describe('attach-volume-to-droplet', () => {
  const default_input = {
    droplet_id: Math.random(),
    region: Math.random(),
    volume_id: Math.random(),
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
    expect(typeof attachVolumeToDroplet).toBe('function');
    expect(typeof attachVolumeToDroplet(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _attachVolumeToDroplet = attachVolumeToDroplet(context);
    await _attachVolumeToDroplet(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/volumes/${default_input.volume_id}/actions`, {
      ...default_input,
      type: 'attach',
      volume_id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _attachVolumeToDroplet = attachVolumeToDroplet(context);
    const output = await _attachVolumeToDroplet(default_input);

    expect(output).toBe(default_output);
  });
});
