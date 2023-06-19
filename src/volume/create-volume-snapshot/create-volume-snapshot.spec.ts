import { createVolumeSnapshot } from './create-volume-snapshot';

describe('create-volume-snapshot', () => {
  const default_input = {
    name: require('crypto').randomBytes(2),
    tags: require('crypto').randomBytes(2),
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
