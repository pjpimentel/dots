import { untagResources } from './untag-resources';

describe('untag-resources', () => {
  const default_input = {
    tag_name: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    delete: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.delete.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof untagResources).toBe('function');
    expect(typeof untagResources(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _untagResources = untagResources(context);
    await _untagResources(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/tags/${default_input.tag_name}/resources`, {
      data: {
        ...default_input,
        tag_name: undefined,
      }
    });
  });

  it('should output axios response', async () => {
    const _untagResources = untagResources(context);
    const output = await _untagResources(default_input);

    expect(output).toBe(default_output);
  });
});
