import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {migrateDatabaseCluster} from './migrate-database-cluster';
import * as MOCK from './migrate-database-cluster.mock';

describe('database', () => {
  const DATABASE_CLUSTER_ID = 'database-cluster-id';
  const URL = `/databases/${DATABASE_CLUSTER_ID}/migrate`;
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onPut(URL, MOCK.request.body).reply(
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
  describe('migrate-database-cluster', () => {
    it('should be a fn', () => {
      expect(typeof migrateDatabaseCluster).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof migrateDatabaseCluster(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _migrateDatabaseCluster = migrateDatabaseCluster(context);
      const response = await _migrateDatabaseCluster({
        ...MOCK.request.body,
        database_cluster_id: DATABASE_CLUSTER_ID
      });
      Object.assign(response, {request: mock.history.put[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('put');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeUndefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
