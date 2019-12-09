import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {destroyReadOnlyReplica} from './destroy-read-only-replica';
import * as MOCK from './destroy-read-only-replica.mock';

describe('database', () => {
  const DATABASE_CLUSTER_ID = 'database-cluster-id';
  const READ_ONLY_REPLICA_NAME = 'replica-name';
  const URL = `/databases/${DATABASE_CLUSTER_ID}/replicas/${READ_ONLY_REPLICA_NAME}`;
  const TOKEN = 'bearer-token';
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
  describe('destroy-database-cluster', () => {
    it('should be a fn', () => {
      expect(typeof destroyReadOnlyReplica).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof destroyReadOnlyReplica(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _destroyReadOnlyReplica = destroyReadOnlyReplica(context);
      const response = await _destroyReadOnlyReplica({
        database_cluster_id: DATABASE_CLUSTER_ID,
        read_only_replica_name: READ_ONLY_REPLICA_NAME,
      });
      Object.assign(response, {request: mock.history.delete[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
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
