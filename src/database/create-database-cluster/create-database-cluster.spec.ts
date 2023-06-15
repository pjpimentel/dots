import { createDatabaseCluster } from './create-database-cluster';

describe('create-database-cluster', () => {
  const default_input = {
    engine: Math.random(),
    name: Math.random(),
    num_nodes: Math.random(),
    private_network_uuid: Math.random(),
    region: Math.random(),
    size: Math.random(),
    tags: Math.random(),
    version: Math.random(),
  } as any;
  const default_output = Math.random();

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
