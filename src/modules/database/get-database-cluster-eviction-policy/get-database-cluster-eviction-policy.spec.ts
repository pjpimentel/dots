import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getDatabaseClusterEvictionPolicy} from './get-database-cluster-eviction-policy';
import * as MOCK from './get-database-cluster-eviction-policy.mock';

describe('database', () => {
  const DATABASE_CLUSTER_ID = 'db-id';
  const URL = `/databases/${DATABASE_CLUSTER_ID}/eviction_policy`;
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
  beforeEach(() => {
    mock.resetHistory();
  });
  describe('get-database-cluster-eviction-policy', () => {
    it('should be a fn', () => {
      expect(typeof getDatabaseClusterEvictionPolicy).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getDatabaseClusterEvictionPolicy(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getDatabaseClusterEvictionPolicy = getDatabaseClusterEvictionPolicy(context);
      const response = await _getDatabaseClusterEvictionPolicy({
        database_cluster_id: DATABASE_CLUSTER_ID,
      });
      Object.assign(response, {request: mock.history.get[0]});
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
      const {eviction_policy} = response.data;
      expect(typeof eviction_policy).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
