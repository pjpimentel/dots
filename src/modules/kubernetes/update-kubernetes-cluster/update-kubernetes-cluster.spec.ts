import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {updateKubernetesCluster} from './update-kubernetes-cluster';
import * as MOCK from './update-kubernetes-cluster.mock';

describe('kubernetes', () => {
  const KUBERNETES_CLUSTER_ID = MOCK.response.body.kubernetes_cluster.id;
  const URL = `/kubernetes/clusters/${KUBERNETES_CLUSTER_ID}`;
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onPut(URL, MOCK.request.body).reply(
    MOCK.response.headers.status,
    MOCK.response.body,
    MOCK.response.headers,
  );
  mock.onPut(URL, MOCK.request.minimumBody).reply(
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
  describe('update-kubernetes-cluster', () => {
    it('should be a fn', () => {
      expect(typeof updateKubernetesCluster).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof updateKubernetesCluster(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _updateKubernetesCluster = updateKubernetesCluster(context);
      const response = await _updateKubernetesCluster({
        ...MOCK.request.body,
        kubernetes_cluster_id: KUBERNETES_CLUSTER_ID,
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
      const {kubernetes_cluster} = response.data;
      expect(typeof kubernetes_cluster.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should POST only required parameters', async () => {
      const _updateKubernetesCluster = updateKubernetesCluster(context);
      const response = await _updateKubernetesCluster({
        ...MOCK.request.minimumBody,
        kubernetes_cluster_id: KUBERNETES_CLUSTER_ID,
      });
      Object.assign(response, {request: mock.history.put[0]});
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('put');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const {
        /// required
        name,
        /// non-required
        maintenance_policy,
        auto_upgrade,
        tags,
      } = JSON.parse(request.data);
      expect(name).toBe(MOCK.request.minimumBody.name);
      expect(maintenance_policy).toBeUndefined();
      expect(auto_upgrade).toBeUndefined();
      expect(tags).toBeUndefined();
    });
  });
});
