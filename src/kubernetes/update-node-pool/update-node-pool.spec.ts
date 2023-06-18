import { updateNodePool } from './update-node-pool';

describe('update-node-pool', () => {
  const default_input = {
    auto_scale: Math.random(),
    count: Math.random(),
    labels: Math.random(),
    max_nodes: Math.random(),
    min_nodes: Math.random(),
    name: Math.random(),
    node_pool_id: Math.random(),
    tags: Math.random(),
    taints: Math.random(),
    kubernetes_cluster_id: Math.random(),
  } as any;
  const default_output = Math.random();

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
    expect(typeof updateNodePool).toBe('function');
    expect(typeof updateNodePool(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateNodePool = updateNodePool(context);
    await _updateNodePool(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/kubernetes/clusters/${default_input.kubernetes_cluster_id}/node_pools/${default_input.node_pool_id}`, {
      ...default_input,
      kubernetes_cluster_id: undefined,
      node_pool_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _updateNodePool = updateNodePool(context);
    const output = await _updateNodePool(default_input);

    expect(output).toBe(default_output);
  });
});
