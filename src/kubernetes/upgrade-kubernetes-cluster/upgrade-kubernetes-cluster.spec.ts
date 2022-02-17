import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {upgradeKubernetesCluster} from './upgrade-kubernetes-cluster';
import * as MOCK from './upgrade-kubernetes-cluster.mock';

describe('kubernetes', () => {
  const KUBERNETES_CLUSTER_ID = 'cluster-id';
  const URL = `/kubernetes/clusters/${KUBERNETES_CLUSTER_ID}/upgrade`;
  const TOKEN = process.env.TEST_TOKEN as string;
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
  describe('upgrade-kubernetes-cluster', () => {
    it('should be a fn', () => {
      expect(typeof upgradeKubernetesCluster).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof upgradeKubernetesCluster(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _upgradeKubernetesCluster = upgradeKubernetesCluster(context);
      const response = await _upgradeKubernetesCluster({
        ...MOCK.request.body,
        kubernetes_cluster_id: KUBERNETES_CLUSTER_ID,
      });
      Object.assign(response, {request: mock.history.post[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
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
      expect(response.data).toBeUndefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
