import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {createKubernetesCluster} from './create-kubernetes-cluster';
import * as MOCK from './create-kubernetes-cluster.mock';

describe('kubernetes', () => {
  const URL = '/kubernetes/clusters';
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
  describe('create-kubernetes-cluster', () => {
    it('should be a fn', () => {
      expect(typeof createKubernetesCluster).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof createKubernetesCluster(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _createKubernetesCluster = createKubernetesCluster(context);
      const response = await _createKubernetesCluster(MOCK.request.body);
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
      const {kubernetes_cluster} = response.data;
      expect(typeof kubernetes_cluster.name).toBe('string');
      expect(typeof kubernetes_cluster.id).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should POST only required parameters', async () => {
      const _createKubernetesCluster = createKubernetesCluster(context);
      const response = await _createKubernetesCluster(MOCK.request.minimumBody);
      Object.assign(response, {request: mock.history.post[0]});
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('post');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const {
        /// required
        name,
        version,
        region,
        node_pools,
        /// non-required
        tags,
        auto_upgrade,
        maintenance_policy,
      } = JSON.parse(request.data);
      expect(name).toBe(MOCK.request.minimumBody.name);
      expect(region).toBe(MOCK.request.minimumBody.region);
      expect(node_pools).toStrictEqual(MOCK.request.minimumBody.node_pools);
      expect(version).toBe(version);
      expect(tags).toBeUndefined();
      expect(auto_upgrade).toBeUndefined();
      expect(maintenance_policy).toBeUndefined();
    });
  });
});
