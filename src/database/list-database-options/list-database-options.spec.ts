import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import { listDatabaseOptions } from './list-database-options';
import * as MOCK from './list-database-options.mock';

describe('databases', () => {
  const URL = `/databases/options`;
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
  describe('list-database-options', () => {
    it('should be a fn', () => {
      expect(typeof listDatabaseOptions).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof listDatabaseOptions(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _listDatabaseOptions = listDatabaseOptions(context);
      const response = await _listDatabaseOptions();
      Object.assign(response, { request: mock.history.get[0] });
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const { request } = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('get');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      /// validate data
      expect(response.data).toBeDefined();
      const { options, version_availability } = response.data;
      expect(options).toBeDefined();
      expect(version_availability).toBeDefined();
      /// validate headers
      const { headers, status } = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
