import { migrateDatabaseCluster } from './migrate-database-cluster';

describe('migrate-database-cluster', () => {
  const default_input = {
    database_cluster_id: Math.random(),
    region: Math.random(),
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
    expect(typeof migrateDatabaseCluster).toBe('function');
    expect(typeof migrateDatabaseCluster(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _migrateDatabaseCluster = migrateDatabaseCluster(context);
    await _migrateDatabaseCluster(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/migrate`, {
      region: default_input.region
    });
  });

  it('should output axios response', async () => {
    const _migrateDatabaseCluster = migrateDatabaseCluster(context);
    const output = await _migrateDatabaseCluster(default_input);

    expect(output).toBe(default_output);
  });
});
