import { purgeCache } from './purge-cache';

describe('purge-cache', () => {
  const default_input = {
    cdn_endpoint_id: `${Math.random()}`,
    files: Math.random(),
  } as any;
  const default_output = Math.random();

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
    expect(typeof purgeCache).toBe('function');
    expect(typeof purgeCache(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _purgeCache = purgeCache(context);
    await _purgeCache(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/cdn/endpoints/${default_input.cdn_endpoint_id}/cache`, {
      data: {
        files: default_input.files,
      }
    });
  });

  it('should output axios response', async () => {
    const _purgeCache = purgeCache(context);
    const output = await _purgeCache(default_input);

    expect(output).toBe(default_output);
  });
});
