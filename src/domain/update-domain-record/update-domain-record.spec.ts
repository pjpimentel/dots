import { updateDomainRecord } from './update-domain-record';

describe('update-domain-record', () => {
  const default_input = {
    data: require('crypto').randomBytes(2),
    domain_name: require('crypto').randomBytes(2),
    domain_record_id: require('crypto').randomBytes(2),
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
    put: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.put.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof updateDomainRecord).toBe('function');
    expect(typeof updateDomainRecord(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateDomainRecord = updateDomainRecord(context);
    await _updateDomainRecord(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/domains/${default_input.domain_name}/records/${default_input.domain_record_id}`, {
      ...default_input,
      domain_name: undefined,
      domain_record_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _updateDomainRecord = updateDomainRecord(context);
    const output = await _updateDomainRecord(default_input);

    expect(output).toBe(default_output);
  });
});
