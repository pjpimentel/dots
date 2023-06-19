import { createNodePool } from './create-node-pool';

describe('create-node-pool', () => {
  const default_input = {
    auto_scale: require('crypto').randomBytes(2),
    count: require('crypto').randomBytes(2),
    kubernetes_cluster_id: require('crypto').randomBytes(2),
    labels: require('crypto').randomBytes(2),
    max_nodes: require('crypto').randomBytes(2),
    min_nodes: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
    size: require('crypto').randomBytes(2),
    tags: require('crypto').randomBytes(2),
    taints: require('crypto').randomBytes(2),
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
    expect(typeof createNodePool).toBe('function');
    expect(typeof createNodePool(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createNodePool = createNodePool(context);
    await _createNodePool(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/kubernetes/clusters/${default_input.kubernetes_cluster_id}/node_pools`, {
      ...default_input,
      kubernetes_cluster_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _createNodePool = createNodePool(context);
    const output = await _createNodePool(default_input);

    expect(output).toBe(default_output);
  });
});
