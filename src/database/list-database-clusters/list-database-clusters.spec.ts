import { listDatabaseClusters } from './list-database-clusters';

describe('list-database-clusters', () => {
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
    expect(typeof listDatabaseClusters).toBe('function');
    expect(typeof listDatabaseClusters(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listDatabaseClusters = listDatabaseClusters(context);
    await _listDatabaseClusters({});

    expect(httpClient.get).toHaveBeenCalledWith(`/databases`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listDatabaseClusters = listDatabaseClusters(context);
    const input = {
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listDatabaseClusters(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/databases`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listDatabaseClusters = listDatabaseClusters(context);
    const output = await _listDatabaseClusters({});

    expect(output).toBe(default_output);
  });
});
