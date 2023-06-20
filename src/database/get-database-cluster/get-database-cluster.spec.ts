import { getDatabaseCluster } from './get-database-cluster';

describe('get-database-cluster', () => {
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
    expect(typeof getDatabaseCluster).toBe('function');
    expect(typeof getDatabaseCluster(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getDatabaseCluster = getDatabaseCluster(context);
    await _getDatabaseCluster(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}`);
  });

  it('should output axios response', async () => {
    const _getDatabaseCluster = getDatabaseCluster(context);
    const output = await _getDatabaseCluster(default_input);

    expect(output).toBe(default_output);
  });
});
