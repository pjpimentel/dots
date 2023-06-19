import { getKubernetesClusterKubeconfig } from './get-kubernetes-cluster-kubeconfig';

describe('get-kubernetes-cluster-kubeconfig', () => {
  const default_input = {
    kubernetes_cluster_id: require('crypto').randomBytes(2),
    expiration_in_seconds: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof getKubernetesClusterKubeconfig).toBe('function');
    expect(typeof getKubernetesClusterKubeconfig(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getKubernetesClusterKubeconfig = getKubernetesClusterKubeconfig(context);
    await _getKubernetesClusterKubeconfig(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/kubernetes/clusters/${default_input.kubernetes_cluster_id}/kubeconfig`, {
      params: {
        expiry_seconds: default_input.expiration_in_seconds
      }
    });
  });

  it('should output axios response', async () => {
    const _getKubernetesClusterKubeconfig = getKubernetesClusterKubeconfig(context);
    const output = await _getKubernetesClusterKubeconfig(default_input);

    expect(output).toBe(default_output);
  });
});
