import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {listDatabaseClusterBackups} from './list-database-cluster-backups';
import * as MOCK from './list-database-cluster-backups.mock';

describe('database', () => {
  const PAGE = 3;
  const PER_PAGE = 26;
  const DATABASE_CLUSTER_ID = 'id';
  const URL = `/databases/${DATABASE_CLUSTER_ID}/backups`;
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
  describe('list-database-cluster-backups', () => {
    it('should be a fn', () => {
      expect(typeof listDatabaseClusterBackups).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof listDatabaseClusterBackups(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _listDatabaseClusterBackups = listDatabaseClusterBackups(context);
      const response = await _listDatabaseClusterBackups({
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
      expect(response.data.backups).toBeDefined();
      const {backups} = response.data;
      const [backup] = backups;
      expect(typeof backup.created_at).toBe('string');
      expect(typeof backup.size_gigabytes).toBe('number');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should have default parameters', async () => {
      const defaultPage = 1;
      const defaultper_page = 25;
      const _listDatabaseClusterBackups = listDatabaseClusterBackups(context);
      const response = await _listDatabaseClusterBackups({
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
