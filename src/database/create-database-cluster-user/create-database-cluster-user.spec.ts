import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {createDatabaseClusterUser} from './create-database-cluster-user';
import * as MOCK from './create-database-cluster-user.mock';

describe('database', () => {
  const DATABASE_CLUSTER_ID = 'db-id';
  const URL = `/databases/${DATABASE_CLUSTER_ID}/users`;
  const TOKEN = process.env.TEST_TOKEN as string;
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
  describe('create-database-cluster-user', () => {
    it('should be a fn', () => {
      expect(typeof createDatabaseClusterUser).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof createDatabaseClusterUser(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _createDatabaseClusterUser = createDatabaseClusterUser(context);
      const response = await _createDatabaseClusterUser({
        user_name: MOCK.request.body.name,
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
      const {user} = response.data;
      expect(typeof user.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
