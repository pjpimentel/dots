import { resizeDatabaseCluster } from './resize-database-cluster';

describe('resize-database-cluster', () => {
  const default_input = {
    database_cluster_id: require('crypto').randomBytes(2),
    num_nodes: require('crypto').randomBytes(2),
    size: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    put: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.put.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof resizeDatabaseCluster).toBe('function');
    expect(typeof resizeDatabaseCluster(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _resizeDatabaseCluster = resizeDatabaseCluster(context);
    await _resizeDatabaseCluster(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/resize`, {
      num_nodes: default_input.num_nodes,
      size: default_input.size,
    });
  });

  it('should output axios response', async () => {
    const _resizeDatabaseCluster = resizeDatabaseCluster(context);
    const output = await _resizeDatabaseCluster(default_input);

    expect(output).toBe(default_output);
  });
});
