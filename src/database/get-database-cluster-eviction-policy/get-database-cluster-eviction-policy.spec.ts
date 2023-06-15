import { getDatabaseClusterEvictionPolicy } from './get-database-cluster-eviction-policy';

describe('get-database-cluster-eviction-policy', () => {
  const default_input = {
    database_cluster_id: Math.random(),
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
    expect(typeof getDatabaseClusterEvictionPolicy).toBe('function');
    expect(typeof getDatabaseClusterEvictionPolicy(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getDatabaseClusterEvictionPolicy = getDatabaseClusterEvictionPolicy(context);
    await _getDatabaseClusterEvictionPolicy(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/eviction_policy`);
  });

  it('should output axios response', async () => {
    const _getDatabaseClusterEvictionPolicy = getDatabaseClusterEvictionPolicy(context);
    const output = await _getDatabaseClusterEvictionPolicy(default_input);

    expect(output).toBe(default_output);
  });
});
