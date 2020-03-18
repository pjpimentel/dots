import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {createNodePool} from './create-node-pool';
import * as MOCK from './create-node-pool.mock';

describe('kubernetes', () => {
  const KUBERNETES_CLUSTER_ID = 'CLUSTER-ID';
  const URL = `/kubernetes/clusters/${KUBERNETES_CLUSTER_ID}/node_pools`;
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
  describe('create-node-pool', () => {
    it('should be a fn', () => {
      expect(typeof createNodePool).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof createNodePool(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _createNodePool = createNodePool(context);
      const response = await _createNodePool({
        ...MOCK.request.body,
        kubernetes_cluster_id: KUBERNETES_CLUSTER_ID
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
      const {node_pool} = response.data;
      expect(typeof node_pool.name).toBe('string');
      expect(typeof node_pool.id).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should POST only required parameters', async () => {
      const _createNodePool = createNodePool(context);
      const response = await _createNodePool({
        ...MOCK.request.minimumBody,
        kubernetes_cluster_id: KUBERNETES_CLUSTER_ID
      });
      Object.assign(response, {request: mock.history.post[0]});
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('post');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const {
        /// required
        name,
        size,
        count,
        /// non-required
        auto_scale,
        max_nodes,
        min_nodes,
        tags,
      } = JSON.parse(request.data);
      expect(name).toBe(MOCK.request.minimumBody.name);
      expect(size).toBe(MOCK.request.minimumBody.size);
      expect(count).toBe(MOCK.request.minimumBody.count);
      expect(auto_scale).toBeUndefined();
      expect(max_nodes).toBeUndefined();
      expect(min_nodes).toBeUndefined();
      expect(tags).toBeUndefined();
    });
  });
});
