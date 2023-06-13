import { downloadInvoice } from './download-invoice';

describe('download-invoice', () => {
  const default_input = {
    invoice_uuid: Math.random(),
    format: Math.random(),
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
    expect(typeof downloadInvoice).toBe('function');
    expect(typeof downloadInvoice(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _downloadInvoice = downloadInvoice(context);
    await _downloadInvoice(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/customers/my/invoices/${default_input.invoice_uuid}/${default_input.format}`, {
      responseType: "stream" // TODO: test with new axios version
    });
  });

  it('should output axios response', async () => {
    const _downloadInvoice = downloadInvoice(context);
    const output = await _downloadInvoice(default_input);

    expect(output).toBe(default_output);
  });
});
