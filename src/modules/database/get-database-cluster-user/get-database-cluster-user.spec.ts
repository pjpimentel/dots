import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getDatabaseClusterUser} from './get-database-cluster-user';
import * as MOCK from './get-database-cluster-user.mock';

describe('database', () => {
  const DATABASE_CLUSTER_ID = 'db-id';
  const USER_NAME = MOCK.response.body.user.name;
  const URL = `/databases/${DATABASE_CLUSTER_ID}/users/${USER_NAME}`;
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
  describe('get-database-cluster-user', () => {
    it('should be a fn', () => {
      expect(typeof getDatabaseClusterUser).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getDatabaseClusterUser(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getDatabaseClusterUser = getDatabaseClusterUser(context);
      const response = await _getDatabaseClusterUser({
        database_cluster_id: DATABASE_CLUSTER_ID,
        user_name: USER_NAME,
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
      const {user} = response.data;
      expect(typeof user.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
