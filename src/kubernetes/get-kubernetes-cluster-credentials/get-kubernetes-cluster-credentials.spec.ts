import { getKubernetesClusterCredentials } from './get-kubernetes-cluster-credentials';

describe('get-kubernetes-cluster-credentials', () => {
  const default_input = {
    kubernetes_cluster_id: Math.random(),
    expiration_in_seconds: Math.random(),
  } as any;
  const default_output = Math.random();

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
    expect(typeof getKubernetesClusterCredentials).toBe('function');
    expect(typeof getKubernetesClusterCredentials(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getKubernetesClusterCredentials = getKubernetesClusterCredentials(context);
    await _getKubernetesClusterCredentials(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/kubernetes/clusters/${default_input.kubernetes_cluster_id}/credentials`, {
      params: {
        expiry_seconds: default_input.expiration_in_seconds
      }
    });
  });

  it('should output axios response', async () => {
    const _getKubernetesClusterCredentials = getKubernetesClusterCredentials(context);
    const output = await _getKubernetesClusterCredentials(default_input);

    expect(output).toBe(default_output);
  });
});
