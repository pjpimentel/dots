import { deleteNodePool } from './delete-node-pool';

describe('delete-node-pool', () => {
  const default_input = {
    kubernetes_cluster_id: Math.random(),
    node_pool_id: Math.random(),
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
    expect(typeof deleteNodePool).toBe('function');
    expect(typeof deleteNodePool(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteNodePool = deleteNodePool(context);
    await _deleteNodePool(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/kubernetes/clusters/${default_input.kubernetes_cluster_id}/node_pools/${default_input.node_pool_id}`);
  });

  it('should output axios response', async () => {
    const _deleteNodePool = deleteNodePool(context);
    const output = await _deleteNodePool(default_input);

    expect(output).toBe(default_output);
  });
});
