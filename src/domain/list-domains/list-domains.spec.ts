import { listDomains } from './list-domains';

describe('list-domains', () => {
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
    expect(typeof listDomains).toBe('function');
    expect(typeof listDomains(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listDomains = listDomains(context);
    await _listDomains({});

    expect(httpClient.get).toHaveBeenCalledWith(`/domains`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listDomains = listDomains(context);
    const input = {
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listDomains(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/domains`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listDomains = listDomains(context);
    const output = await _listDomains({});

    expect(output).toBe(default_output);
  });
});
