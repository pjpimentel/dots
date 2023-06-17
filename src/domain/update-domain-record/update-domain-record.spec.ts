import { updateDomainRecord } from './update-domain-record';

describe('update-domain-record', () => {
  const default_input = {
    data: Math.random(),
    domain_name: Math.random(),
    domain_record_id: Math.random(),
    flags: Math.random(),
    name: Math.random(),
    port: Math.random(),
    priority: Math.random(),
    tag: Math.random(),
    ttl: Math.random(),
    type: Math.random(),
    weight: Math.random(),
  } as any;
  const default_output = Math.random();

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
