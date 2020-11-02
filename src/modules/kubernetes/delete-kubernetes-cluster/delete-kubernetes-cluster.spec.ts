import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {deleteKubernetesCluster} from './delete-kubernetes-cluster';
import * as MOCK from './delete-kubernetes-cluster.mock';

describe('kubernetes', () => {
  const KUBERNETES_CLUSTER_ID = 'cluster-id';
  const URL = `/kubernetes/clusters/${KUBERNETES_CLUSTER_ID}`;
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
  describe('delete-kubernetes-cluster', () => {
    it('should be a fn', () => {
      expect(typeof deleteKubernetesCluster).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteKubernetesCluster(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _deleteKubernetesCluster = deleteKubernetesCluster(context);
      const response = await _deleteKubernetesCluster({
        kubernetes_cluster_id: KUBERNETES_CLUSTER_ID
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
