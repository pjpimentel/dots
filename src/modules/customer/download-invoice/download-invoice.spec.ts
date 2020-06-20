import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {downloadInvoice} from './download-invoice';
import * as MOCK from './download-invoice.mock';

describe('customer', () => {
  const INVOICE_UUID = '123-123-123-123';
  const URL = `/customers/my/invoices/${INVOICE_UUID}/csv`;
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onGet(URL).reply(
    MOCK.response.headers.status,
    MOCK.response.body,
    MOCK.response.headers,
  );
  const context = createContext({
    axios,
    token: TOKEN,
  });
  describe('download-invoice', () => {
    it('should be and return a fn', () => {
      expect(typeof downloadInvoice).toBe('function');
      expect(typeof downloadInvoice(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _downloadInvoice = downloadInvoice(context);
      const response = await _downloadInvoice({
        invoice_uuid: INVOICE_UUID,
        format: 'csv',
      });
      Object.assign(response, { request: mock.history.get[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBeTruthy();
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('get');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
