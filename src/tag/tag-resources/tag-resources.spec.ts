import { tagResources } from './tag-resources';

describe('tag-resources', () => {
  const default_input = {
    tag_name: Math.random(),
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
    expect(typeof tagResources).toBe('function');
    expect(typeof tagResources(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _tagResources = tagResources(context);
    await _tagResources(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/tags/${default_input.tag_name}/resources`, {
      ...default_input,
      tag_name: undefined,
    });
  });

  it('should output axios response', async () => {
    const _tagResources = tagResources(context);
    const output = await _tagResources(default_input);

    expect(output).toBe(default_output);
  });
});
