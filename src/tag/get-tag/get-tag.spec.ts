import { getTag } from './get-tag';

describe('get-tag', () => {
  const default_input = {
    tag_name: Math.random(),
  } as any;
  const default_output = Math.random();

  const httpClient = {
    get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof getTag).toBe('function');
    expect(typeof getTag(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getTag = getTag(context);
    await _getTag(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/tags/${default_input.tag_name}`);
  });

  it('should output axios response', async () => {
    const _getTag = getTag(context);
    const output = await _getTag(default_input);

    expect(output).toBe(default_output);
  });
});
