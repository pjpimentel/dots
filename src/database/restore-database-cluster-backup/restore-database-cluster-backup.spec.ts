import { restoreDatabaseClusterBackup } from './restore-database-cluster-backup';

describe('restore-database-cluster-backup', () => {
  const default_input = {
    backup_restore: require('crypto').randomBytes(2),
    engine: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
    num_nodes: require('crypto').randomBytes(2),
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
