import { listLoadBalancers } from './list-load-balancers';

describe('list-load-balancers', () => {
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
    expect(typeof listLoadBalancers).toBe('function');
    expect(typeof listLoadBalancers(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listLoadBalancers = listLoadBalancers(context);
    await _listLoadBalancers({});

    expect(httpClient.get).toHaveBeenCalledWith(`/load_balancers`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listLoadBalancers = listLoadBalancers(context);
    const input = {
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listLoadBalancers(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/load_balancers`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listLoadBalancers = listLoadBalancers(context);
    const output = await _listLoadBalancers({});

    expect(output).toBe(default_output);
  });
});
