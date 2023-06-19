import { runClusterlintOnKubernetesCluster } from './run-clusterlint-on-kubernetes-cluster';

describe('run-clusterlint-on-kubernetes-cluster', () => {
  const default_input = {
    include_groups: require('crypto').randomBytes(2),
    include_checks: require('crypto').randomBytes(2),
    exclude_groups: require('crypto').randomBytes(2),
    exclude_checks: require('crypto').randomBytes(2),
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
    expect(typeof runClusterlintOnKubernetesCluster).toBe('function');
    expect(typeof runClusterlintOnKubernetesCluster(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _runClusterlintOnKubernetesCluster = runClusterlintOnKubernetesCluster(context);
    await _runClusterlintOnKubernetesCluster(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/kubernetes/clusters/${default_input.kubernetes_cluster_id}/clusterlint`, {
      ...default_input,
      kubernetes_cluster_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _runClusterlintOnKubernetesCluster = runClusterlintOnKubernetesCluster(context);
    const output = await _runClusterlintOnKubernetesCluster(default_input);

    expect(output).toBe(default_output);
  });
});
