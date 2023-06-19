import { deleteNode } from './delete-node';

describe('delete-node', () => {
  const default_input = {
    kubernetes_cluster_id: require('crypto').randomBytes(2),
    node_pool_id: require('crypto').randomBytes(2),
    node_id: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

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
    expect(typeof deleteNode).toBe('function');
    expect(typeof deleteNode(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteNode = deleteNode(context);
    await _deleteNode(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/kubernetes/clusters/${default_input.kubernetes_cluster_id}/node_pools/${default_input.node_pool_id}/nodes/${default_input.node_id}`, {
      params: {
        skip_drain: 0,
        replace: 0
      }
    });
  });

  it('should send `skip_drain` as expected', async () => {
    const _deleteNode = deleteNode(context);
    await _deleteNode({
      ...default_input,
      drain_node: true
    });

    expect(httpClient.delete).toHaveBeenCalledWith(expect.anything(), {
      params: {
        skip_drain: 0,
        replace: 0
      }
    });

    await _deleteNode({
      ...default_input,
      drain_node: false
    });

    expect(httpClient.delete).toHaveBeenCalledWith(expect.anything(), {
      params: {
        skip_drain: 1,
        replace: 0
      }
    });
  });

  it('should send `replace` as expected', async () => {
    const _deleteNode = deleteNode(context);
    await _deleteNode({
      ...default_input,
      replace_node: false
    });

    expect(httpClient.delete).toHaveBeenCalledWith(expect.anything(), {
      params: {
        skip_drain: 0,
        replace: 0
      }
    });

    await _deleteNode({
      ...default_input,
      replace_node: true
    });

    expect(httpClient.delete).toHaveBeenCalledWith(expect.anything(), {
      params: {
        skip_drain: 0,
        replace: 1
      }
    });
  });

  it('should output axios response', async () => {
    const _deleteNode = deleteNode(context);
    const output = await _deleteNode(default_input);

    expect(output).toBe(default_output);
  });
});
