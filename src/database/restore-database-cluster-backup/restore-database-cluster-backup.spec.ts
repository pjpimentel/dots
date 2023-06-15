import { restoreDatabaseClusterBackup } from './restore-database-cluster-backup';

describe('restore-database-cluster-backup', () => {
  const default_input = {
    backup_restore: Math.random(),
    engine: Math.random(),
    name: Math.random(),
    num_nodes: Math.random(),
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
    expect(typeof restoreDatabaseClusterBackup).toBe('function');
    expect(typeof restoreDatabaseClusterBackup(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _restoreDatabaseClusterBackup = restoreDatabaseClusterBackup(context);
    await _restoreDatabaseClusterBackup(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/databases`, default_input);
  });

  it('should output axios response', async () => {
    const _restoreDatabaseClusterBackup = restoreDatabaseClusterBackup(context);
    const output = await _restoreDatabaseClusterBackup(default_input);

    expect(output).toBe(default_output);
  });
});
