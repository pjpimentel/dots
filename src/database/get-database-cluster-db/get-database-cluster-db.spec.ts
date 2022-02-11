import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {getDatabaseClusterDb} from './get-database-cluster-db';
import * as MOCK from './get-database-cluster-db.mock';

describe('database', () => {
  const DATABASE_CLUSTER_ID = 'db-id';
  const DB_NAME = MOCK.response.body.db.name;
  const URL = `/databases/${DATABASE_CLUSTER_ID}/dbs/${DB_NAME}`;
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
  describe('get-database-cluster-db', () => {
    it('should be a fn', () => {
      expect(typeof getDatabaseClusterDb).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getDatabaseClusterDb(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getDatabaseClusterDb = getDatabaseClusterDb(context);
      const response = await _getDatabaseClusterDb({
        database_cluster_id: DATABASE_CLUSTER_ID,
        db_name: DB_NAME,
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
      const {db} = response.data;
      expect(typeof db.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
