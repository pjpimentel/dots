import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {createDatabaseClusterDb} from './create-database-cluster-db';
import * as MOCK from './create-database-cluster-db.mock';

describe('database', () => {
  const DATABASE_CLUSTER_ID = 'db-id';
  const URL = `/databases/${DATABASE_CLUSTER_ID}/dbs`;
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
  describe('create-database-cluster-db', () => {
    it('should be a fn', () => {
      expect(typeof createDatabaseClusterDb).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof createDatabaseClusterDb(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _createDatabaseClusterDb = createDatabaseClusterDb(context);
      const response = await _createDatabaseClusterDb({
        db_name: MOCK.request.body.name,
        database_cluster_id: DATABASE_CLUSTER_ID,
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
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('post');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeDefined();
      const {db} = response.data;
      expect(typeof db.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
