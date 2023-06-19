import { upgradeKubernetesCluster } from './upgrade-kubernetes-cluster';

describe('upgrade-kubernetes-cluster', () => {
  const default_input = {
    version: require('crypto').randomBytes(2),
    kubernetes_cluster_id: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    post: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.post.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof upgradeKubernetesCluster).toBe('function');
    expect(typeof upgradeKubernetesCluster(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _upgradeKubernetesCluster = upgradeKubernetesCluster(context);
    await _upgradeKubernetesCluster(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/kubernetes/clusters/${default_input.kubernetes_cluster_id}/upgrade`, {
      ...default_input,
      kubernetes_cluster_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _upgradeKubernetesCluster = upgradeKubernetesCluster(context);
    const output = await _upgradeKubernetesCluster(default_input);

    expect(output).toBe(default_output);
  });
});
