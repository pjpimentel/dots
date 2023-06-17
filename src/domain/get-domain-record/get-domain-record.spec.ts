import { getDomainRecord } from './get-domain-record';

describe('get-domain-record', () => {
  const default_input = {
    domain_name: Math.random(),
    domain_record_id: Math.random(),
  } as any;
  const default_output = Math.random();

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
    expect(typeof getDomainRecord).toBe('function');
    expect(typeof getDomainRecord(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getDomainRecord = getDomainRecord(context);
    await _getDomainRecord(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/domains/${default_input.domain_name}/records/${default_input.domain_record_id}`);
  });

  it('should output axios response', async () => {
    const _getDomainRecord = getDomainRecord(context);
    const output = await _getDomainRecord(default_input);

    expect(output).toBe(default_output);
  });
});
