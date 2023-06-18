import { deleteKubernetesCluster } from './delete-kubernetes-cluster';

describe('delete-kubernetes-cluster', () => {
  const default_input = {
    kubernetes_cluster_id: Math.random(),
  } as any;
  const default_output = Math.random();

  const httpClient = {
    delete: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.delete.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof deleteKubernetesCluster).toBe('function');
    expect(typeof deleteKubernetesCluster(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteKubernetesCluster = deleteKubernetesCluster(context);
    await _deleteKubernetesCluster(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/kubernetes/clusters/${default_input.kubernetes_cluster_id}`);
  });

  it('should output axios response', async () => {
    const _deleteKubernetesCluster = deleteKubernetesCluster(context);
    const output = await _deleteKubernetesCluster(default_input);

    expect(output).toBe(default_output);
  });
});
