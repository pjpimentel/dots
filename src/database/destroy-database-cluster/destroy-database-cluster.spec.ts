import { destroyDatabaseCluster } from './destroy-database-cluster';

describe('destroy-database-cluster', () => {
  const default_input = {
    database_cluster_id: Math.random(),
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
    expect(typeof destroyDatabaseCluster).toBe('function');
    expect(typeof destroyDatabaseCluster(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _destroyDatabaseCluster = destroyDatabaseCluster(context);
    await _destroyDatabaseCluster(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}`);
  });

  it('should output axios response', async () => {
    const _destroyDatabaseCluster = destroyDatabaseCluster(context);
    const output = await _destroyDatabaseCluster(default_input);

    expect(output).toBe(default_output);
  });
});
