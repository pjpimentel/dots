import { listCdnEndpoints } from './list-cdn-endpoints';

describe('list-cdn-endpoints', () => {
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
    expect(typeof listCdnEndpoints).toBe('function');
    expect(typeof listCdnEndpoints(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listCdnEndpoints = listCdnEndpoints(context);
    await _listCdnEndpoints({});

    expect(httpClient.get).toHaveBeenCalledWith(`/cdn/endpoints`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listCdnEndpoints = listCdnEndpoints(context);
    const input = {
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listCdnEndpoints(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/cdn/endpoints`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listCdnEndpoints = listCdnEndpoints(context);
    const output = await _listCdnEndpoints({});

    expect(output).toBe(default_output);
  });
});
