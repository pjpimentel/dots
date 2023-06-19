import { createVolume } from './create-volume';

describe('create-volume', () => {
  const default_input = {
    description: require('crypto').randomBytes(2),
    filesystem_label: require('crypto').randomBytes(2),
    filesystem_type: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
    region: require('crypto').randomBytes(2),
    size_gigabytes: require('crypto').randomBytes(2),
    snapshot_id: require('crypto').randomBytes(2),
    tags: require('crypto').randomBytes(2),
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
