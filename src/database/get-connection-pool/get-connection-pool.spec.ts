import { getConnectionPool } from './get-connection-pool';

describe('get-connection-pool', () => {
  const default_input = {
    database_cluster_id: Math.random(),
    pool_name: Math.random(),
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
    expect(typeof getConnectionPool).toBe('function');
    expect(typeof getConnectionPool(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getConnectionPool = getConnectionPool(context);
    await _getConnectionPool(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/pools/${default_input.pool_name}`);
  });

  it('should output axios response', async () => {
    const _getConnectionPool = getConnectionPool(context);
    const output = await _getConnectionPool(default_input);

    expect(output).toBe(default_output);
  });
});
