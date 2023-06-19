import { listInvoiceItems } from './list-invoice-items';

describe('list-invoice-items', () => {
  const default_input = {
    invoice_uuid: require('crypto').randomBytes(2),
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
    expect(typeof listInvoiceItems).toBe('function');
    expect(typeof listInvoiceItems(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listInvoiceItems = listInvoiceItems(context);
    await _listInvoiceItems(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/customers/my/invoices/${default_input.invoice_uuid}`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listInvoiceItems = listInvoiceItems(context);
    const input = {
      ...default_input,
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
    } as any;
    await _listInvoiceItems(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/customers/my/invoices/${default_input.invoice_uuid}`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listInvoiceItems = listInvoiceItems(context);
    const output = await _listInvoiceItems(default_input);

    expect(output).toBe(default_output);
  });
});
