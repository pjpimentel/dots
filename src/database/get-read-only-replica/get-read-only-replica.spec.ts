import { getReadOnlyReplica } from './get-read-only-replica';

describe('get-read-only-replica', () => {
  const default_input = {
    database_cluster_id: Math.random(),
    read_only_replica_name: Math.random(),
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
    expect(typeof getReadOnlyReplica).toBe('function');
    expect(typeof getReadOnlyReplica(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getReadOnlyReplica = getReadOnlyReplica(context);
    await _getReadOnlyReplica(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/replicas/${default_input.read_only_replica_name}`);
  });

  it('should output axios response', async () => {
    const _getReadOnlyReplica = getReadOnlyReplica(context);
    const output = await _getReadOnlyReplica(default_input);

    expect(output).toBe(default_output);
  });
});
