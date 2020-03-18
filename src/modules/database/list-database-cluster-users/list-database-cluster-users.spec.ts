import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {listDatabaseClusterUsers} from './list-database-cluster-users';
import * as MOCK from './list-database-cluster-users.mock';

describe('database', () => {
  const PAGE = 3;
  const PER_PAGE = 26;
  const DATABASE_CLUSTER_ID = 'id';
  const URL = `/databases/${DATABASE_CLUSTER_ID}/users`;
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
  describe('list-database-cluster-users', () => {
    it('should be a fn', () => {
      expect(typeof listDatabaseClusterUsers).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof listDatabaseClusterUsers(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _listDatabaseClusterUsers = listDatabaseClusterUsers(context);
      const response = await _listDatabaseClusterUsers({
        database_cluster_id: DATABASE_CLUSTER_ID,
        page: PAGE,
        per_page: PER_PAGE,
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
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(PAGE);
      expect(request.params.per_page).toBe(PER_PAGE);
      expect(request.params.resource_type).toBeUndefined();
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.links).toBeDefined();
      expect(response.data.meta).toBeDefined();
      expect(response.data.users).toBeDefined();
      const {users} = response.data;
      const [user] = users;
      expect(typeof user.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should have default parameters', async () => {
      const defaultPage = 1;
      const defaultper_page = 25;
      const _listDatabaseClusterUsers = listDatabaseClusterUsers(context);
      const response = await _listDatabaseClusterUsers({
        database_cluster_id: DATABASE_CLUSTER_ID,
      });
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(defaultPage);
      expect(request.params.per_page).toBe(defaultper_page);
    });
  });
});
