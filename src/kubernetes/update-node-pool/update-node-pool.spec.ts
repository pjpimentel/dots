import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {updateNodePool} from './update-node-pool';
import * as MOCK from './update-node-pool.mock';

describe('kubernetes', () => {
  const KUBERNETES_CLUSTER_ID = 'cluster-id';
  const NODE_POOL_ID = MOCK.response.body.node_pool.id;
  const URL = `/kubernetes/clusters/${KUBERNETES_CLUSTER_ID}/node_pools/${NODE_POOL_ID}`;
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onPut(URL, MOCK.request.body).reply(
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
  describe('update-node-pool', () => {
    it('should be a fn', () => {
      expect(typeof updateNodePool).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof updateNodePool(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _updateNodePool = updateNodePool(context);
      const response = await _updateNodePool({
        ...MOCK.request.body,
        kubernetes_cluster_id: KUBERNETES_CLUSTER_ID,
        node_pool_id: NODE_POOL_ID,
      });
      Object.assign(response, {request: mock.history.put[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('put');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeDefined();
      const {node_pool} = response.data;
      expect(typeof node_pool.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
