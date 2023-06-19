import { updateKubernetesCluster } from './update-kubernetes-cluster';

describe('update-kubernetes-cluster', () => {
  const default_input = {
    auto_upgrade: require('crypto').randomBytes(2),
    kubernetes_cluster_id: require('crypto').randomBytes(2),
    maintenance_policy: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
    tags: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    put: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.put.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof updateKubernetesCluster).toBe('function');
    expect(typeof updateKubernetesCluster(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateKubernetesCluster = updateKubernetesCluster(context);
    await _updateKubernetesCluster(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/kubernetes/clusters/${default_input.kubernetes_cluster_id}`, {
      ...default_input,
      kubernetes_cluster_id: undefined,
      node_pool_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _updateKubernetesCluster = updateKubernetesCluster(context);
    const output = await _updateKubernetesCluster(default_input);

    expect(output).toBe(default_output);
  });
});
