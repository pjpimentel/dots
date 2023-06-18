import { listKubernetesClusterAvailableUpgrades } from './list-kubernetes-cluster-available-upgrades';

describe('list-kubernetes-cluster-available-upgrades', () => {
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
    expect(typeof listKubernetesClusterAvailableUpgrades).toBe('function');
    expect(typeof listKubernetesClusterAvailableUpgrades(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listKubernetesClusterAvailableUpgrades = listKubernetesClusterAvailableUpgrades(context);
    await _listKubernetesClusterAvailableUpgrades(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/kubernetes/clusters/${default_input.kubernetes_cluster_id}/upgrades`);
  });

  it('should output axios response', async () => {
    const _listKubernetesClusterAvailableUpgrades = listKubernetesClusterAvailableUpgrades(context);
    const output = await _listKubernetesClusterAvailableUpgrades(default_input);

    expect(output).toBe(default_output);
  });
});
