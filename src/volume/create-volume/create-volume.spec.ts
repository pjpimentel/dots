import { createVolume } from './create-volume';

describe('create-volume', () => {
  const default_input = {
    description: Math.random(),
    filesystem_label: Math.random(),
    filesystem_type: Math.random(),
    name: Math.random(),
    region: Math.random(),
    size_gigabytes: Math.random(),
    snapshot_id: Math.random(),
    tags: Math.random(),
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
    expect(typeof createVolume).toBe('function');
    expect(typeof createVolume(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createVolume = createVolume(context);
    await _createVolume(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/volumes`, default_input);
  });

  it('should output axios response', async () => {
    const _createVolume = createVolume(context);
    const output = await _createVolume(default_input);

    expect(output).toBe(default_output);
  });
});
