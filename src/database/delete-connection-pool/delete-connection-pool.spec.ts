import { deleteConnectionPool } from './delete-connection-pool';

describe('delete-connection-pool', () => {
  const default_input = {
    database_cluster_id: require('crypto').randomBytes(2),
    pool_name: require('crypto').randomBytes(2),
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
    expect(typeof deleteConnectionPool).toBe('function');
    expect(typeof deleteConnectionPool(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteConnectionPool = deleteConnectionPool(context);
    await _deleteConnectionPool(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/pools/${default_input.pool_name}`);
  });

  it('should output axios response', async () => {
    const _deleteConnectionPool = deleteConnectionPool(context);
    const output = await _deleteConnectionPool(default_input);

    expect(output).toBe(default_output);
  });
});
