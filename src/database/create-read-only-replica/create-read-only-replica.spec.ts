import { createReadOnlyReplica } from './create-read-only-replica';

describe('create-read-only-replica', () => {
  const default_input = {
    database_cluster_id: Math.random(),
    name: Math.random(),
    region: Math.random(),
    size: Math.random(),
    tags: Math.random(),
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
    expect(typeof createReadOnlyReplica).toBe('function');
    expect(typeof createReadOnlyReplica(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createReadOnlyReplica = createReadOnlyReplica(context);
    await _createReadOnlyReplica(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/replicas`, {
      name: default_input.name,
      region: default_input.region,
      size: default_input.size,
      tags: default_input.tags,
    });
  });

  it('should output axios response', async () => {
    const _createReadOnlyReplica = createReadOnlyReplica(context);
    const output = await _createReadOnlyReplica(default_input);

    expect(output).toBe(default_output);
  });
});
