import { createDomainRecord } from './create-domain-record';

describe('create-domain-record', () => {
  const default_input = {
    domain_name: require('crypto').randomBytes(2),
    data: require('crypto').randomBytes(2),
    flags: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
    port: require('crypto').randomBytes(2),
    priority: require('crypto').randomBytes(2),
    tag: require('crypto').randomBytes(2),
    ttl: require('crypto').randomBytes(2),
    type: require('crypto').randomBytes(2),
    weight: require('crypto').randomBytes(2),
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
    expect(typeof createDomainRecord).toBe('function');
    expect(typeof createDomainRecord(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createDomainRecord = createDomainRecord(context);
    await _createDomainRecord(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/domains/${default_input.domain_name}/records`, {
      ...default_input,
      domain_name: undefined
    });
  });

  it('should output axios response', async () => {
    const _createDomainRecord = createDomainRecord(context);
    const output = await _createDomainRecord(default_input);

    expect(output).toBe(default_output);
  });
});
