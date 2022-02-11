import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {listInvoices} from './list-invoices';
import * as MOCK from './list-invoices.mock';

describe('customer', () => {
  const PAGE = 3;
  const PER_PAGE = 26;
  const URL = '/customers/my/invoices';
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
  describe('list-invoices', () => {
    it('should be and return a fn', () => {
      expect(typeof listInvoices).toBe('function');
      expect(typeof listInvoices(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _listInvoices = listInvoices(context);
      const response = await _listInvoices({page: PAGE, per_page: PER_PAGE});
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
      expect(response.data.invoices).toBeDefined();
      const {invoices, invoice_preview} = response.data;
      const [invoice] = invoices;
      expect(typeof invoice.invoice_uuid).toBe('string');
      expect(typeof invoice.amount).toBe('string');
      expect(typeof invoice_preview.updated_at).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should have default parameters', async () => {
      const defaultPage = 1;
      const defaultper_page = 25;
      const _listInvoices = listInvoices(context);
      const response = await _listInvoices({});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(defaultPage);
      expect(request.params.per_page).toBe(defaultper_page);
    });
  });
});
