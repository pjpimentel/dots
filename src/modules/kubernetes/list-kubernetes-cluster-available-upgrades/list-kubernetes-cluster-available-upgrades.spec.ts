import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {listKubernetesClusterAvailableUpgrades} from './list-kubernetes-cluster-available-upgrades';
import * as MOCK from './list-kubernetes-cluster-available-upgrades.mock';

describe('kubernetes', () => {
  const KUBERNETES_CLUSTER_ID = 'cluster-id';
  const URL = `/kubernetes/clusters/${KUBERNETES_CLUSTER_ID}/upgrades`;
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
  describe('list-kubernetes-cluster-available-upgrades', () => {
    it('should be a fn', () => {
      expect(typeof listKubernetesClusterAvailableUpgrades).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof listKubernetesClusterAvailableUpgrades(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _listKubernetesClusterAvailableUpgrades = listKubernetesClusterAvailableUpgrades(context);
      const response = await _listKubernetesClusterAvailableUpgrades({
        kubernetes_cluster_id: KUBERNETES_CLUSTER_ID,
      });
      Object.assign(response, {request: mock.history.get[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('get');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeUndefined();
      /// validate data
      expect(response.data).toBeDefined();
      const {available_upgrade_versions} = response.data;
      const [available_upgrade_version] = available_upgrade_versions;
      expect(typeof available_upgrade_version.slug).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
