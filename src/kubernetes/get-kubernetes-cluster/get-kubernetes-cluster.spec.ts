import { getKubernetesCluster } from './get-kubernetes-cluster';

describe('get-kubernetes-cluster', () => {
  const default_input = {
    kubernetes_cluster_id: Math.random(),
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
    expect(typeof getKubernetesCluster).toBe('function');
    expect(typeof getKubernetesCluster(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getKubernetesCluster = getKubernetesCluster(context);
    await _getKubernetesCluster(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/kubernetes/clusters/${default_input.kubernetes_cluster_id}`);
  });

  it('should output axios response', async () => {
    const _getKubernetesCluster = getKubernetesCluster(context);
    const output = await _getKubernetesCluster(default_input);

    expect(output).toBe(default_output);
  });
});
