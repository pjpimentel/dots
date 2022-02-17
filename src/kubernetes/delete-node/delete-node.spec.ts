import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {deleteNode} from './delete-node';
import * as MOCK from './delete-node.mock';

describe('kubernetes', () => {
  const KUBERNETES_CLUSTER_ID = 'cluster-id';
  const NODE_POOL_ID = 'node-pool-id';
  const NODE_ID = 'node-id';
  const URL = `/kubernetes/clusters/${KUBERNETES_CLUSTER_ID}/node_pools/${NODE_POOL_ID}/nodes/${NODE_ID}`;
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
  describe('delete-node', () => {
    it('should be a fn', () => {
      expect(typeof deleteNode).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteNode(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _deleteNode = deleteNode(context);
      const response = await _deleteNode({
        kubernetes_cluster_id: KUBERNETES_CLUSTER_ID,
        node_pool_id: NODE_POOL_ID,
        node_id: NODE_ID,
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
    it('should set skip_drain parameter to 0', async () => {
      const _deleteNode = deleteNode(context);
      const response = await _deleteNode({
        kubernetes_cluster_id: KUBERNETES_CLUSTER_ID,
        node_pool_id: NODE_POOL_ID,
        node_id: NODE_ID,
        drain_node: true,
      });
      Object.assign(response, {request: mock.history.delete[0]});
      const {request} = response;
      expect(request.params.skip_drain).toBe(0);
    });
    it('should set skip_drain parameter to 1', async () => {
      const _deleteNode = deleteNode(context);
      const response = await _deleteNode({
        kubernetes_cluster_id: KUBERNETES_CLUSTER_ID,
        node_pool_id: NODE_POOL_ID,
        node_id: NODE_ID,
        drain_node: false,
      });
      Object.assign(response, {request: mock.history.delete[0]});
      const {request} = response;
      expect(request.params.skip_drain).toBe(1);
    });
    it('should set replace parameter to 0', async () => {
      const _deleteNode = deleteNode(context);
      const response = await _deleteNode({
        kubernetes_cluster_id: KUBERNETES_CLUSTER_ID,
        node_pool_id: NODE_POOL_ID,
        node_id: NODE_ID,
        replace_node: false,
      });
      Object.assign(response, {request: mock.history.delete[0]});
      const {request} = response;
      expect(request.params.replace).toBe(0);
    });
    it('should set replace parameter to 1', async () => {
      const _deleteNode = deleteNode(context);
      const response = await _deleteNode({
        kubernetes_cluster_id: KUBERNETES_CLUSTER_ID,
        node_pool_id: NODE_POOL_ID,
        node_id: NODE_ID,
        replace_node: true,
      });
      Object.assign(response, {request: mock.history.delete[0]});
      const {request} = response;
      expect(request.params.replace).toBe(1);
    });
  });
});
