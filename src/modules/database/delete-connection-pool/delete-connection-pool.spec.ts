import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {deleteConnectionPool} from './delete-connection-pool';
import * as MOCK from './delete-connection-pool.mock';

describe('database', () => {
  const DATABASE_CLUSTER_ID = 'database-cluster-id';
  const POOL_NAME = 'pool-name';
  const URL = `/databases/${DATABASE_CLUSTER_ID}/pools/${POOL_NAME}`;
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onDelete(URL, MOCK.request.body).reply(
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
  describe('delete-connection-pool', () => {
    it('should be a fn', () => {
      expect(typeof deleteConnectionPool).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteConnectionPool(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _deleteConnectionPool = deleteConnectionPool(context);
      const response = await _deleteConnectionPool({
        database_cluster_id: DATABASE_CLUSTER_ID,
        pool_name: POOL_NAME,
      });
      Object.assign(response, {request: mock.history.delete[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('delete');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeUndefined();
      /// validate data
      expect(response.data).toBeUndefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
