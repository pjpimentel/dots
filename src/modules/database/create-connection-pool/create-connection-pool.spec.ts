import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {createConnectionPool} from './create-connection-pool';
import * as MOCK from './create-connection-pool.mock';

describe('database', () => {
  const DATABASE_CLUSTER_ID = 'db-id';
  const URL = `/databases/${DATABASE_CLUSTER_ID}/pools`;
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onPost(URL, MOCK.request.body).reply(
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
  describe('create-connection-pool', () => {
    it('should be a fn', () => {
      expect(typeof createConnectionPool).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof createConnectionPool(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _createConnectionPool = createConnectionPool(context);
      const response = await _createConnectionPool({
        pool_name: MOCK.request.body.name,
        db_name: MOCK.request.body.db,
        user_name: MOCK.request.body.user,
        database_cluster_id: DATABASE_CLUSTER_ID,
        ...MOCK.request.body,
      });
      Object.assign(response, {request: mock.history.post[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('post');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeDefined();
      const {pool} = response.data;
      expect(typeof pool.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
