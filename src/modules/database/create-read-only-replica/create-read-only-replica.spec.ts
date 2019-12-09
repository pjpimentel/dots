import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {createReadOnlyReplica} from './create-read-only-replica';
import * as MOCK from './create-read-only-replica.mock';

describe('database', () => {
  const DATABASE_CLUSTER_ID = 'db-id';
  const URL = `/databases/${DATABASE_CLUSTER_ID}/replicas`;
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
  describe('create-read-only-replica', () => {
    it('should be a fn', () => {
      expect(typeof createReadOnlyReplica).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof createReadOnlyReplica(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _createReadOnlyReplica = createReadOnlyReplica(context);
      const response = await _createReadOnlyReplica({
        ...MOCK.request.body,
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
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('post');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeDefined();
      const {replica} = response.data;
      expect(typeof replica.status).toBe('string');
      expect(typeof replica.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
