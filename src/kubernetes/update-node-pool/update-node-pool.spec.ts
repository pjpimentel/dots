import { updateNodePool } from './update-node-pool';

describe('update-node-pool', () => {
  const default_input = {
    auto_scale: require('crypto').randomBytes(2),
    count: require('crypto').randomBytes(2),
    labels: require('crypto').randomBytes(2),
    max_nodes: require('crypto').randomBytes(2),
    min_nodes: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
    node_pool_id: require('crypto').randomBytes(2),
    tags: require('crypto').randomBytes(2),
    taints: require('crypto').randomBytes(2),
    kubernetes_cluster_id: require('crypto').randomBytes(2),
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
