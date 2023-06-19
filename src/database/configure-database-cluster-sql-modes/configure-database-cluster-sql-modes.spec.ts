import { configureDatabaseClusterSqlModes } from './configure-database-cluster-sql-modes';

describe('configure-database-cluster-sql-modes', () => {
  const default_input = {
    database_cluster_id: require('crypto').randomBytes(2),
    sql_mode: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

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
    expect(typeof configureDatabaseClusterSqlModes).toBe('function');
    expect(typeof configureDatabaseClusterSqlModes(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _configureDatabaseClusterSqlModes = configureDatabaseClusterSqlModes(context);
    await _configureDatabaseClusterSqlModes(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/sql_mode`, {
      sql_mode: default_input.sql_mode,
    });
  });

  it('should output axios response', async () => {
    const _configureDatabaseClusterSqlModes = configureDatabaseClusterSqlModes(context);
    const output = await _configureDatabaseClusterSqlModes(default_input);

    expect(output).toBe(default_output);
  });
});
