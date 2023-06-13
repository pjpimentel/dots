import { listBillingHistory } from './list-billing-history';

describe('list-billing-history', () => {
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
    expect(typeof listBillingHistory).toBe('function');
    expect(typeof listBillingHistory(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listBillingHistory = listBillingHistory(context);
    await _listBillingHistory({});

    expect(httpClient.get).toHaveBeenCalledWith(`/customers/my/billing_history`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listBillingHistory = listBillingHistory(context);
    const input = {
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listBillingHistory(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/customers/my/billing_history`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listBillingHistory = listBillingHistory(context);
    const output = await _listBillingHistory({});

    expect(output).toBe(default_output);
  });
});
