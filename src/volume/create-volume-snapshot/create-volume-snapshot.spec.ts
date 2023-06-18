import { createVolumeSnapshot } from './create-volume-snapshot';

describe('create-volume-snapshot', () => {
  const default_input = {
    name: Math.random(),
    tags: Math.random(),
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
    expect(typeof createVolumeSnapshot).toBe('function');
    expect(typeof createVolumeSnapshot(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createVolumeSnapshot = createVolumeSnapshot(context);
    await _createVolumeSnapshot(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/volumes/${default_input.volume_id}/snapshots`, {
      ...default_input,
      volume_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _createVolumeSnapshot = createVolumeSnapshot(context);
    const output = await _createVolumeSnapshot(default_input);

    expect(output).toBe(default_output);
  });
});
