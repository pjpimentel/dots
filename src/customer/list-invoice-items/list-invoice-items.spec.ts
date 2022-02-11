import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {listInvoiceItems} from './list-invoice-items';
import * as MOCK from './list-invoice-items.mock';

describe('customer', () => {
  const PAGE = 3;
  const PER_PAGE = 26;
  const INVOICE_UUID = '123-123-123-123';
  const URL = `/customers/my/invoices/${INVOICE_UUID}`;
  const TOKEN = process.env.TEST_TOKEN as string;
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
  beforeEach(() => {
    mock.resetHistory();
  });
  describe('list-invoice-items', () => {
    it('should be and return a fn', () => {
      expect(typeof listInvoiceItems).toBe('function');
      expect(typeof listInvoiceItems(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _listInvoiceItems = listInvoiceItems(context);
      const response = await _listInvoiceItems({
        page: PAGE, per_page: PER_PAGE, invoice_uuid: INVOICE_UUID,
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
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(PAGE);
      expect(request.params.per_page).toBe(PER_PAGE);
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.invoice_items).toBeDefined();
      const {invoice_items} = response.data;
      const [invoice_item] = invoice_items;
      expect(typeof invoice_item.product).toBe('string');
      expect(typeof invoice_item.amount).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should have default parameters', async () => {
      const defaultPage = 1;
      const defaultper_page = 25;
      const _listInvoiceItems = listInvoiceItems(context);
      const response = await _listInvoiceItems({
        invoice_uuid: INVOICE_UUID,
      });
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(defaultPage);
      expect(request.params.per_page).toBe(defaultper_page);
    });
  });
});
