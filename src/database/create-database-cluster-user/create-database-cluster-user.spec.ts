import { createDatabaseClusterUser } from './create-database-cluster-user';

describe('create-database-cluster-user', () => {
  const default_input = {
    database_cluster_id: Math.random(),
    user_name: Math.random(),
    mysql_settings: Math.random(),
  } as any;
  const default_output = Math.random();

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
    expect(typeof createDatabaseClusterUser).toBe('function');
    expect(typeof createDatabaseClusterUser(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createDatabaseClusterUser = createDatabaseClusterUser(context);
    await _createDatabaseClusterUser(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/users`, {
      name: default_input.user_name,
      mysql_settings: default_input.mysql_settings
    });
  });

  it('should output axios response', async () => {
    const _createDatabaseClusterUser = createDatabaseClusterUser(context);
    const output = await _createDatabaseClusterUser(default_input);

    expect(output).toBe(default_output);
  });
});
