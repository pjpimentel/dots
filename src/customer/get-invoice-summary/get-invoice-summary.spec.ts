import { getInvoiceSummary } from './get-invoice-summary';

describe('get-invoice-summary', () => {
  const default_input = {
    invoice_uuid: Math.random(),
  } as any;
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
    expect(typeof getInvoiceSummary).toBe('function');
    expect(typeof getInvoiceSummary(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getInvoiceSummary = getInvoiceSummary(context);
    await _getInvoiceSummary(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/customers/my/invoices/${default_input.invoice_uuid}/summary`);
  });

  it('should output axios response', async () => {
    const _getInvoiceSummary = getInvoiceSummary(context);
    const output = await _getInvoiceSummary(default_input);

    expect(output).toBe(default_output);
  });
});
