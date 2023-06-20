import { createCdnEndpoint } from './create-cdn-endpoint';

describe('create-cdn-endpoint', () => {
  const default_input = {
    origin: require('crypto').randomBytes(2),
    ttl: require('crypto').randomBytes(2),
    certificate_id: require('crypto').randomBytes(2),
    custom_domain: require('crypto').randomBytes(2),
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
    expect(typeof createCdnEndpoint).toBe('function');
    expect(typeof createCdnEndpoint(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createCdnEndpoint = createCdnEndpoint(context);
    await _createCdnEndpoint(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/cdn/endpoints`, default_input);
  });

  it('should output axios response', async () => {
    const _createCdnEndpoint = createCdnEndpoint(context);
    const output = await _createCdnEndpoint(default_input);

    expect(output).toBe(default_output);
  });
});
