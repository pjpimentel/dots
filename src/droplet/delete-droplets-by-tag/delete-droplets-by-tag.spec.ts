import { deleteDropletsByTag } from './delete-droplets-by-tag';

describe('delete-droplets-by-tag', () => {
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
    expect(typeof deleteDropletsByTag).toBe('function');
    expect(typeof deleteDropletsByTag(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteDropletsByTag = deleteDropletsByTag(context);
    await _deleteDropletsByTag(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/droplets`, {
      params: default_input
    });
  });

  it('should output axios response', async () => {
    const _deleteDropletsByTag = deleteDropletsByTag(context);
    const output = await _deleteDropletsByTag(default_input);

    expect(output).toBe(default_output);
  });
});
