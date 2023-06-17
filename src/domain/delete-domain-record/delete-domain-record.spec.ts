import { deleteDomainRecord } from './delete-domain-record';

describe('delete-domain-record', () => {
  const default_input = {
    domain_name: Math.random(),
    domain_record_id: Math.random()
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
    expect(typeof deleteDomainRecord).toBe('function');
    expect(typeof deleteDomainRecord(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteDomainRecord = deleteDomainRecord(context);
    await _deleteDomainRecord(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/domains/${default_input.domain_name}/records/${default_input.domain_record_id}`);
  });

  it('should output axios response', async () => {
    const _deleteDomainRecord = deleteDomainRecord(context);
    const output = await _deleteDomainRecord(default_input);

    expect(output).toBe(default_output);
  });
});
