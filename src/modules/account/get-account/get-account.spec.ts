import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getAccount} from './get-account';
import * as MOCK from './get-account.mock';

describe('account', () => {
  const URL = '/account';
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
  describe('get-account', () => {
    it('should be a fn', () => {
      expect(typeof getAccount).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getAccount(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getAccount = getAccount(context);
      const response = await _getAccount();
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
      expect(response.data.account).toBeDefined();
      const {account} = response.data;
      expect(typeof account.droplet_limit).toBe('number');
      expect(typeof account.email_verified).toBe('boolean');
      expect(typeof account.email).toBe('string');
      expect(typeof account.floating_ip_limit).toBe('number');
      expect(typeof account.status_message).toBe('string');
      expect(typeof account.status).toBe('string');
      expect(typeof account.uuid).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
