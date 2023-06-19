import { updateCdnEndpoint } from './update-cdn-endpoint';

describe('update-cdn-endpoint', () => {
  const default_input = {
    cdn_endpoint_id: require('crypto').randomBytes(2),
    ttl: require('crypto').randomBytes(2),
    certificate_id: require('crypto').randomBytes(2),
    custom_domain: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    put: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.put.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof updateCdnEndpoint).toBe('function');
    expect(typeof updateCdnEndpoint(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateCdnEndpoint = updateCdnEndpoint(context);
    await _updateCdnEndpoint(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/cdn/endpoints/${default_input.cdn_endpoint_id}`, {
      ttl: default_input.ttl,
      certificate_id: default_input.certificate_id,
      custom_domain: default_input.custom_domain,
    });
  });

  it('should output axios response', async () => {
    const _updateCdnEndpoint = updateCdnEndpoint(context);
    const output = await _updateCdnEndpoint(default_input);

    expect(output).toBe(default_output);
  });
});
