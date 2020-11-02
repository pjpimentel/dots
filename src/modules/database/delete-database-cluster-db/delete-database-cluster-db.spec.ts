import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {deleteDatabaseClusterDb} from './delete-database-cluster-db';
import * as MOCK from './delete-database-cluster-db.mock';

describe('database', () => {
  const DATABASE_CLUSTER_ID = 'database-cluster-id';
  const DB_NAME = 'db-name';
  const URL = `/databases/${DATABASE_CLUSTER_ID}/dbs/${DB_NAME}`;
  const TOKEN = process.env.TEST_TOKEN as string;
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
  describe('remove-database-cluster-db', () => {
    it('should be a fn', () => {
      expect(typeof deleteDatabaseClusterDb).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteDatabaseClusterDb(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _deleteDatabaseClusterDb = deleteDatabaseClusterDb(context);
      const response = await _deleteDatabaseClusterDb({
        database_cluster_id: DATABASE_CLUSTER_ID,
        db_name: DB_NAME,
      });
      Object.assign(response, {request: mock.history.delete[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
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
