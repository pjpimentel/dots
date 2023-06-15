import { configureDatabaseClusterEvictionPolicy } from './configure-database-cluster-eviction-policy';

describe('configure-database-cluster-eviction-policy', () => {
  const default_input = {
    database_cluster_id: Math.random(),
    eviction_policy: Math.random(),
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
    expect(typeof configureDatabaseClusterEvictionPolicy).toBe('function');
    expect(typeof configureDatabaseClusterEvictionPolicy(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _configureDatabaseClusterEvictionPolicy = configureDatabaseClusterEvictionPolicy(context);
    await _configureDatabaseClusterEvictionPolicy(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/eviction_policy`, {
      eviction_policy: default_input.eviction_policy,
    });
  });

  it('should output axios response', async () => {
    const _configureDatabaseClusterEvictionPolicy = configureDatabaseClusterEvictionPolicy(context);
    const output = await _configureDatabaseClusterEvictionPolicy(default_input);

    expect(output).toBe(default_output);
  });
});
