import { listDatabaseClusterDbs } from './list-database-cluster-dbs';

describe('list-database-cluster-dbs', () => {
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
    expect(typeof listDatabaseClusterDbs).toBe('function');
    expect(typeof listDatabaseClusterDbs(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listDatabaseClusterDbs = listDatabaseClusterDbs(context);
    await _listDatabaseClusterDbs(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/dbs`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listDatabaseClusterDbs = listDatabaseClusterDbs(context);
    const input = {
      ...default_input,
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listDatabaseClusterDbs(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/dbs`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listDatabaseClusterDbs = listDatabaseClusterDbs(context);
    const output = await _listDatabaseClusterDbs(default_input);

    expect(output).toBe(default_output);
  });
});
