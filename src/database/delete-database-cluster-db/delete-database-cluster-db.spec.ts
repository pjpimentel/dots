import { deleteDatabaseClusterDb } from './delete-database-cluster-db';

describe('delete-database-cluster-db', () => {
  const default_input = {
    database_cluster_id: require('crypto').randomBytes(2),
    db_name: require('crypto').randomBytes(2),
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
    expect(typeof deleteDatabaseClusterDb).toBe('function');
    expect(typeof deleteDatabaseClusterDb(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteDatabaseClusterDb = deleteDatabaseClusterDb(context);
    await _deleteDatabaseClusterDb(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/dbs/${default_input.db_name}`);
  });

  it('should output axios response', async () => {
    const _deleteDatabaseClusterDb = deleteDatabaseClusterDb(context);
    const output = await _deleteDatabaseClusterDb(default_input);

    expect(output).toBe(default_output);
  });
});
