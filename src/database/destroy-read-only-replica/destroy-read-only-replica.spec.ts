import { destroyReadOnlyReplica } from './destroy-read-only-replica';

describe('destroy-read-only-replica', () => {
  const default_input = {
    database_cluster_id: require('crypto').randomBytes(2),
    read_only_replica_name: require('crypto').randomBytes(2),
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
    expect(typeof destroyReadOnlyReplica).toBe('function');
    expect(typeof destroyReadOnlyReplica(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _destroyReadOnlyReplica = destroyReadOnlyReplica(context);
    await _destroyReadOnlyReplica(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/replicas/${default_input.read_only_replica_name}`);
  });

  it('should output axios response', async () => {
    const _destroyReadOnlyReplica = destroyReadOnlyReplica(context);
    const output = await _destroyReadOnlyReplica(default_input);

    expect(output).toBe(default_output);
  });
});
