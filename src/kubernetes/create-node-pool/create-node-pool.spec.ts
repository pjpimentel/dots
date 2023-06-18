import { createNodePool } from './create-node-pool';

describe('create-node-pool', () => {
  const default_input = {
    auto_scale: Math.random(),
    count: Math.random(),
    kubernetes_cluster_id: Math.random(),
    labels: Math.random(),
    max_nodes: Math.random(),
    min_nodes: Math.random(),
    name: Math.random(),
    size: Math.random(),
    tags: Math.random(),
    taints: Math.random(),
  } as any;
  const default_output = Math.random();

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
