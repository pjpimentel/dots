import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {getReadOnlyReplica} from './get-read-only-replica';
import * as MOCK from './get-read-only-replica.mock';

describe('database', () => {
  const DATABASE_CLUSTER_ID = 'db-id';
  const READ_ONLY_REPLICA_NAME = MOCK.response.body.replica.name;
  const URL = `/databases/${DATABASE_CLUSTER_ID}/replicas/${READ_ONLY_REPLICA_NAME}`;
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
  describe('get-read-only-replica', () => {
    it('should be a fn', () => {
      expect(typeof getReadOnlyReplica).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getReadOnlyReplica(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getReadOnlyReplica = getReadOnlyReplica(context);
      const response = await _getReadOnlyReplica({
        database_cluster_id: DATABASE_CLUSTER_ID,
        read_only_replica_name: READ_ONLY_REPLICA_NAME,
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
      const {replica} = response.data;
      expect(typeof replica.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
