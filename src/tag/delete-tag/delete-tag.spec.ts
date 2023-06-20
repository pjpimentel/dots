import { deleteTag } from './delete-tag';

describe('delete-tag', () => {
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
    expect(typeof deleteTag).toBe('function');
    expect(typeof deleteTag(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteTag = deleteTag(context);
    await _deleteTag(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/tags/${default_input.tag_name}`);
  });

  it('should output axios response', async () => {
    const _deleteTag = deleteTag(context);
    const output = await _deleteTag(default_input);

    expect(output).toBe(default_output);
  });
});
