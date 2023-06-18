import { listVpcs } from './list-vpcs';

describe('list-vpcs', () => {
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
    expect(typeof listVpcs).toBe('function');
    expect(typeof listVpcs(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listVpcs = listVpcs(context);
    await _listVpcs({});

    expect(httpClient.get).toHaveBeenCalledWith(`/vpcs`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listVpcs = listVpcs(context);
    const input = {
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listVpcs(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/vpcs`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listVpcs = listVpcs(context);
    const output = await _listVpcs({});

    expect(output).toBe(default_output);
  });
});
