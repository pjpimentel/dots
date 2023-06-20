import { createDatabaseCluster } from './create-database-cluster';

describe('create-database-cluster', () => {
  const default_input = {
    engine: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
    num_nodes: require('crypto').randomBytes(2),
    private_network_uuid: require('crypto').randomBytes(2),
    region: require('crypto').randomBytes(2),
    size: require('crypto').randomBytes(2),
    tags: require('crypto').randomBytes(2),
    version: require('crypto').randomBytes(2),
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
    expect(typeof createDatabaseCluster).toBe('function');
    expect(typeof createDatabaseCluster(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createDatabaseCluster = createDatabaseCluster(context);
    await _createDatabaseCluster(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/databases`, default_input);
  });

  it('should output axios response', async () => {
    const _createDatabaseCluster = createDatabaseCluster(context);
    const output = await _createDatabaseCluster(default_input);

    expect(output).toBe(default_output);
  });
});
