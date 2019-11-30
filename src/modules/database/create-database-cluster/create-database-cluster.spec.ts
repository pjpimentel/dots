import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {createDatabaseCluster} from './create-database-cluster';
import * as MOCK from './create-database-cluster.mock';

describe('database', () => {
  const URL = '/databases';
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onPost(URL, MOCK.request.body).reply(
    MOCK.response.headers.status,
    MOCK.response.body,
    MOCK.response.headers,
  );
  mock.onPost(URL, MOCK.request.minimumBody).reply(
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
  describe('create-database-cluster', () => {
    it('should be a fn', () => {
      expect(typeof createDatabaseCluster).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof createDatabaseCluster(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _createDatabaseCluster = createDatabaseCluster(context);
      const response = await _createDatabaseCluster(MOCK.request.body);
      Object.assign(response, {request: mock.history.post[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('post');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeDefined();
      const {database} = response.data;
      expect(typeof database.id).toBe('string');
      expect(typeof database.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should POST only required parameters', async () => {
      const _createDatabaseCluster = createDatabaseCluster(context);
      const response = await _createDatabaseCluster(MOCK.request.minimumBody);
      Object.assign(response, {request: mock.history.post[0]});
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('post');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const {
        /// required
        engine,
        name,
        num_nodes,
        region,
        size,
        /// non-required
        tags,
        version,
      } = JSON.parse(request.data);
      expect(name).toBe(MOCK.request.minimumBody.name);
      expect(region).toBe(MOCK.request.minimumBody.region);
      expect(size).toBe(MOCK.request.minimumBody.size);
      expect(engine).toBe(MOCK.request.minimumBody.engine);
      expect(num_nodes).toBe(MOCK.request.minimumBody.num_nodes);
      expect(tags).toBeUndefined();
      expect(version).toBeUndefined();
    });
  });
});
