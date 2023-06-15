import { listDatabaseClusterUsers } from './list-database-cluster-users';

describe('list-database-cluster-users', () => {
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
    expect(typeof listDatabaseClusterUsers).toBe('function');
    expect(typeof listDatabaseClusterUsers(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listDatabaseClusterUsers = listDatabaseClusterUsers(context);
    await _listDatabaseClusterUsers(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/users`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listDatabaseClusterUsers = listDatabaseClusterUsers(context);
    const input = {
      ...default_input,
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listDatabaseClusterUsers(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/users`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listDatabaseClusterUsers = listDatabaseClusterUsers(context);
    const output = await _listDatabaseClusterUsers(default_input);

    expect(output).toBe(default_output);
  });
});
