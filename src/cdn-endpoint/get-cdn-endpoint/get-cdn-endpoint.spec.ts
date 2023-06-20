import { getCdnEndpoint } from './get-cdn-endpoint';

describe('get-cdn-endpoint', () => {
  const default_input = {
    cdn_endpoint_id: `${require('crypto').randomBytes(2)}`
  } as any;
  const default_output = require('crypto').randomBytes(2);

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
    expect(typeof getCdnEndpoint).toBe('function');
    expect(typeof getCdnEndpoint(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getCdnEndpoint = getCdnEndpoint(context);
    await _getCdnEndpoint(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/cdn/endpoints/${default_input.cdn_endpoint_id}`);
  });

  it('should output axios response', async () => {
    const _getCdnEndpoint = getCdnEndpoint(context);
    const output = await _getCdnEndpoint(default_input);

    expect(output).toBe(default_output);
  });
});
