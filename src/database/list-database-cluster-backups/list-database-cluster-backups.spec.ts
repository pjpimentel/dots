import { listDatabaseClusterBackups } from './list-database-cluster-backups';

describe('list-database-cluster-backups', () => {
  const default_input = {
    database_cluster_id: require('crypto').randomBytes(2),
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
    expect(typeof listDatabaseClusterBackups).toBe('function');
    expect(typeof listDatabaseClusterBackups(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listDatabaseClusterBackups = listDatabaseClusterBackups(context);
    await _listDatabaseClusterBackups(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/backups`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listDatabaseClusterBackups = listDatabaseClusterBackups(context);
    const input = {
      ...default_input,
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
    };
    await _listDatabaseClusterBackups(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/backups`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listDatabaseClusterBackups = listDatabaseClusterBackups(context);
    const output = await _listDatabaseClusterBackups(default_input);

    expect(output).toBe(default_output);
  });
});
