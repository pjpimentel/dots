import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {getBalance} from './get-balance';
import * as MOCK from './get-balance.mock';

describe('customer', () => {
  const URL = '/customers/my/balance';
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
  describe('get-balance', () => {
    it('should be a fn', () => {
      expect(typeof getBalance).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getBalance(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getBalance = getBalance(context);
      const response = await _getBalance();
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
      expect(typeof response.data.account_balance).toBe('string');
      expect(typeof response.data.generated_at).toBe('string');
      expect(typeof response.data.month_to_date_balance).toBe('string');
      expect(typeof response.data.month_to_date_usage).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
