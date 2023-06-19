import { createDatabaseClusterDb } from './create-database-cluster-db';

describe('create-database-cluster-db', () => {
  const default_input = {
    database_cluster_id: require('crypto').randomBytes(2),
    db_name: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    post: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.post.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof createDatabaseClusterDb).toBe('function');
    expect(typeof createDatabaseClusterDb(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createDatabaseClusterDb = createDatabaseClusterDb(context);
    await _createDatabaseClusterDb(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/dbs`, {
      name: default_input.db_name,
    });
  });

  it('should output axios response', async () => {
    const _createDatabaseClusterDb = createDatabaseClusterDb(context);
    const output = await _createDatabaseClusterDb(default_input);

    expect(output).toBe(default_output);
  });
});
