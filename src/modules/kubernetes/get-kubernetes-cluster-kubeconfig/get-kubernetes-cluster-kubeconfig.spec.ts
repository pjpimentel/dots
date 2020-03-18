import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getKubernetesClusterKubeconfig} from './get-kubernetes-cluster-kubeconfig';
import * as MOCK from './get-kubernetes-cluster-kubeconfig.mock';

describe('kubernetes', () => {
  const KUBERNETES_CLUSTER_ID = 'cluster-id';
  const EXPIRATION_IN_SECONDS = 123;
  const URL = `/kubernetes/clusters/${KUBERNETES_CLUSTER_ID}/kubeconfig`;
  const TOKEN = 'bearer-token';
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
  describe('get-kubernetes-cluster-kubeconfig', () => {
    it('should be a fn', () => {
      expect(typeof getKubernetesClusterKubeconfig).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getKubernetesClusterKubeconfig(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getKubernetesClusterKubeconfig = getKubernetesClusterKubeconfig(context);
      const response = await _getKubernetesClusterKubeconfig({
        kubernetes_cluster_id: KUBERNETES_CLUSTER_ID,
        expiration_in_seconds: EXPIRATION_IN_SECONDS,
      });
      Object.assign(response, {request: mock.history.get[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('string');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('get');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.params).toBeDefined();
      expect(request.params.expiry_seconds).toBe(EXPIRATION_IN_SECONDS);
      /// validate data
      expect(response.data).toBeDefined();
      expect(typeof response.data).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
