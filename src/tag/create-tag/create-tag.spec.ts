import { createTag } from './create-tag';

describe('create-tag', () => {
  const default_input = {
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
    expect(typeof createTag).toBe('function');
    expect(typeof createTag(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createTag = createTag(context);
    await _createTag(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/tags`, default_input);
  });

  it('should output axios response', async () => {
    const _createTag = createTag(context);
    const output = await _createTag(default_input);

    expect(output).toBe(default_output);
  });
});
