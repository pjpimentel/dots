import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {removeDatabaseClusterUser} from './remove-database-cluster-user';
import * as MOCK from './remove-database-cluster-user.mock';

describe('database', () => {
  const DATABASE_CLUSTER_ID = 'database-cluster-id';
  const USER_NAME = 'user-name';
  const URL = `/databases/${DATABASE_CLUSTER_ID}/users/${USER_NAME}`;
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
  describe('remove-database-cluster-user', () => {
    it('should be a fn', () => {
      expect(typeof removeDatabaseClusterUser).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof removeDatabaseClusterUser(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _removeDatabaseClusterUser = removeDatabaseClusterUser(context);
      const response = await _removeDatabaseClusterUser({
        database_cluster_id: DATABASE_CLUSTER_ID,
        user_name: USER_NAME,
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
