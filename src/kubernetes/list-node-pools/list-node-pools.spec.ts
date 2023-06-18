import { listNodePools } from './list-node-pools';

describe('list-node-pools', () => {
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
    expect(typeof listNodePools).toBe('function');
    expect(typeof listNodePools(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listNodePools = listNodePools(context);
    await _listNodePools(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/kubernetes/clusters/${default_input.kubernetes_cluster_id}/node_pools`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listNodePools = listNodePools(context);
    const input = {
      ...default_input,
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listNodePools(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/kubernetes/clusters/${default_input.kubernetes_cluster_id}/node_pools`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listNodePools = listNodePools(context);
    const output = await _listNodePools(default_input);

    expect(output).toBe(default_output);
  });
});
