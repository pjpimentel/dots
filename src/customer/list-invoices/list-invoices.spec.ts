import { listInvoices } from './list-invoices';

describe('list-invoices', () => {
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
    expect(typeof listInvoices).toBe('function');
    expect(typeof listInvoices(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listInvoices = listInvoices(context);
    await _listInvoices({});

    expect(httpClient.get).toHaveBeenCalledWith(`/customers/my/invoices`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listInvoices = listInvoices(context);
    const input = {
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
    } as any;
    await _listInvoices(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/customers/my/invoices`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listInvoices = listInvoices(context);
    const output = await _listInvoices({});

    expect(output).toBe(default_output);
  });
});
