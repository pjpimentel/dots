import { createDomainRecord } from './create-domain-record';

describe('create-domain-record', () => {
  const default_input = {
    domain_name: Math.random(),
    data: Math.random(),
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
