import { getNodePool } from './get-node-pool';

describe('get-node-pool', () => {
  const default_input = {
    kubernetes_cluster_id: Math.random(),
    node_pool_id: Math.random(),
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
    expect(typeof getNodePool).toBe('function');
    expect(typeof getNodePool(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getNodePool = getNodePool(context);
    await _getNodePool(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/kubernetes/clusters/${default_input.kubernetes_cluster_id}/node_pools/${default_input.node_pool_id}`);
  });

  it('should output axios response', async () => {
    const _getNodePool = getNodePool(context);
    const output = await _getNodePool(default_input);

    expect(output).toBe(default_output);
  });
});
