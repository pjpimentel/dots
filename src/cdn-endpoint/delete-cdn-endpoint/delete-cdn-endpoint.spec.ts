import { deleteCdnEndpoint } from './delete-cdn-endpoint';

describe('delete-cdn-endpoint', () => {
  const default_input = {
    cdn_endpoint_id: `${require('crypto').randomBytes(2)}`,
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
    expect(typeof deleteCdnEndpoint).toBe('function');
    expect(typeof deleteCdnEndpoint(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteCdnEndpoint = deleteCdnEndpoint(context);
    await _deleteCdnEndpoint(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/cdn/endpoints/${default_input.cdn_endpoint_id}`);
  });

  it('should output axios response', async () => {
    const _deleteCdnEndpoint = deleteCdnEndpoint(context);
    const output = await _deleteCdnEndpoint(default_input);

    expect(output).toBe(default_output);
  });
});
