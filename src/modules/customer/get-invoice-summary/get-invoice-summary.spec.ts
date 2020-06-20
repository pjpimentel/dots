import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getInvoiceSummary} from './get-invoice-summary';
import * as MOCK from './get-invoice-summary.mock';

describe('customer', () => {
  const INVOICE_UUID = '123-123-123-123';
  const URL = `/customers/my/invoices/${INVOICE_UUID}/summary`;
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
  describe('get-invoice-summary', () => {
    it('should be and return a fn', () => {
      expect(typeof getInvoiceSummary).toBe('function');
      expect(typeof getInvoiceSummary(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getInvoiceSummary = getInvoiceSummary(context);
      const response = await _getInvoiceSummary({
        invoice_uuid: INVOICE_UUID
      });
      Object.assign(response, { request: mock.history.get[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('get');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      /// validate data
      expect(response.data).toBeDefined();
      expect(typeof response.data.amount).toBe('string');
      expect(typeof response.data.invoice_uuid).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
