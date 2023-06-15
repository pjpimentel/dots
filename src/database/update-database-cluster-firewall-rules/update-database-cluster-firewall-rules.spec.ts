import { updateDatabaseClusterFirewallRules } from './update-database-cluster-firewall-rules';

describe('update-database-cluster-firewall-rules', () => {
  const default_input = {
    database_cluster_id: Math.random(),
    rules: Math.random(),
  } as any;
  const default_output = Math.random();

  const httpClient = {
    put: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.put.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof updateDatabaseClusterFirewallRules).toBe('function');
    expect(typeof updateDatabaseClusterFirewallRules(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateDatabaseClusterFirewallRules = updateDatabaseClusterFirewallRules(context);
    await _updateDatabaseClusterFirewallRules(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/firewall`, {
      rules: default_input.rules
    });
  });

  it('should output axios response', async () => {
    const _updateDatabaseClusterFirewallRules = updateDatabaseClusterFirewallRules(context);
    const output = await _updateDatabaseClusterFirewallRules(default_input);

    expect(output).toBe(default_output);
  });
});
