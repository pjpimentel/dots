import { getDatabaseClusterUser } from './get-database-cluster-user';

describe('get-database-cluster-user', () => {
  const default_input = {
    database_cluster_id: Math.random(),
    user_name: Math.random(),
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
    expect(typeof getDatabaseClusterUser).toBe('function');
    expect(typeof getDatabaseClusterUser(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getDatabaseClusterUser = getDatabaseClusterUser(context);
    await _getDatabaseClusterUser(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/users/${default_input.user_name}`);
  });

  it('should output axios response', async () => {
    const _getDatabaseClusterUser = getDatabaseClusterUser(context);
    const output = await _getDatabaseClusterUser(default_input);

    expect(output).toBe(default_output);
  });
});
