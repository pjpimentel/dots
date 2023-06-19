import { getDatabaseClusterDb } from './get-database-cluster-db';

describe('get-database-cluster-db', () => {
  const default_input = {
    database_cluster_id: require('crypto').randomBytes(2),
    db_name: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

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
    expect(typeof getDatabaseClusterDb).toBe('function');
    expect(typeof getDatabaseClusterDb(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getDatabaseClusterDb = getDatabaseClusterDb(context);
    await _getDatabaseClusterDb(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/dbs/${default_input.db_name}`);
  });

  it('should output axios response', async () => {
    const _getDatabaseClusterDb = getDatabaseClusterDb(context);
    const output = await _getDatabaseClusterDb(default_input);

    expect(output).toBe(default_output);
  });
});
