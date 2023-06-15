import { getDatabaseClusterSqlMode } from './get-database-cluster-sql-mode';

describe('get-database-cluster-sql-mode', () => {
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
    expect(typeof getDatabaseClusterSqlMode).toBe('function');
    expect(typeof getDatabaseClusterSqlMode(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getDatabaseClusterSqlMode = getDatabaseClusterSqlMode(context);
    await _getDatabaseClusterSqlMode(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/sql_mode`);
  });

  it('should output axios response', async () => {
    const _getDatabaseClusterSqlMode = getDatabaseClusterSqlMode(context);
    const output = await _getDatabaseClusterSqlMode(default_input);

    expect(output).toBe(default_output);
  });
});
