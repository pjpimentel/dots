import { listDomainRecords } from './list-domain-records';

describe('list-domain-records', () => {
  const default_input = {
    domain_name: require('crypto').randomBytes(2),
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
    expect(typeof listDomainRecords).toBe('function');
    expect(typeof listDomainRecords(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listDomainRecords = listDomainRecords(context);
    await _listDomainRecords(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/domains/${default_input.domain_name}/records`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page`, `per_page` and `type` input', async () => {
    const _listDomainRecords = listDomainRecords(context);
    const input = {
      ...default_input,
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
      type: require('crypto').randomBytes(2),
    } as any;
    await _listDomainRecords(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/domains/${default_input.domain_name}/records`, {
      params: {
        page: input.page,
        per_page: input.per_page,
        type: input.type
      },
    });
  });

  it('should output axios response', async () => {
    const _listDomainRecords = listDomainRecords(context);
    const output = await _listDomainRecords(default_input);

    expect(output).toBe(default_output);
  });
});
