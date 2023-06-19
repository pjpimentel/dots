import { createConnectionPool } from './create-connection-pool';

describe('create-connection-pool', () => {
  const default_input = {
    database_cluster_id: require('crypto').randomBytes(2),
    db_name: require('crypto').randomBytes(2),
    mode: require('crypto').randomBytes(2),
    pool_name: require('crypto').randomBytes(2),
    size: require('crypto').randomBytes(2),
    user_name: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    post: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.post.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof createConnectionPool).toBe('function');
    expect(typeof createConnectionPool(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createConnectionPool = createConnectionPool(context);
    await _createConnectionPool(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/pools`, {
      db: default_input.db_name,
      mode: default_input.mode,
      name: default_input.pool_name,
      size: default_input.size,
      user: default_input.user_name,
    });
  });

  it('should output axios response', async () => {
    const _createConnectionPool = createConnectionPool(context);
    const output = await _createConnectionPool(default_input);

    expect(output).toBe(default_output);
  });
});
