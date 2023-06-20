import { removeDatabaseClusterUser } from './remove-database-cluster-user';

describe('remove-database-cluster-user', () => {
  const default_input = {
    database_cluster_id: require('crypto').randomBytes(2),
    user_name: require('crypto').randomBytes(2),
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
    expect(typeof removeDatabaseClusterUser).toBe('function');
    expect(typeof removeDatabaseClusterUser(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _removeDatabaseClusterUser = removeDatabaseClusterUser(context);
    await _removeDatabaseClusterUser(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/users/${default_input.user_name}`);
  });

  it('should output axios response', async () => {
    const _removeDatabaseClusterUser = removeDatabaseClusterUser(context);
    const output = await _removeDatabaseClusterUser(default_input);

    expect(output).toBe(default_output);
  });
});
