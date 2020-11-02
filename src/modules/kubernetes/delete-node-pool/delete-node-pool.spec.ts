import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {deleteNodePool} from './delete-node-pool';
import * as MOCK from './delete-node-pool.mock';

describe('kubernetes', () => {
  const KUBERNETES_CLUSTER_ID = 'cluster-id';
  const NODE_POOL_ID = 'node-pool-id';
  const URL = `/kubernetes/clusters/${KUBERNETES_CLUSTER_ID}/node_pools/${NODE_POOL_ID}`;
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onDelete(URL).reply(
    MOCK.response.headers.status,
    undefined,
    MOCK.response.headers,
  );
  const context = createContext({
    axios,
    token: TOKEN,
  });
  beforeEach(() => {
    mock.resetHistory();
  });
  describe('delete-node-pool', () => {
    it('should be a fn', () => {
      expect(typeof deleteNodePool).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteNodePool(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _deleteNodePool = deleteNodePool(context);
      const response = await _deleteNodePool({
        kubernetes_cluster_id: KUBERNETES_CLUSTER_ID,
        node_pool_id: NODE_POOL_ID,
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
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
