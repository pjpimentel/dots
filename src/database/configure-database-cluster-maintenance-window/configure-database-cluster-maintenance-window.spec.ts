import { configureDatabaseClusterMaintenanceWindow } from './configure-database-cluster-maintenance-window';

describe('configure-database-cluster-maintenance-window', () => {
  const default_input = {
    database_cluster_id: Math.random(),
    day: Math.random(),
    hour: Math.random(),
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
    expect(typeof configureDatabaseClusterMaintenanceWindow).toBe('function');
    expect(typeof configureDatabaseClusterMaintenanceWindow(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _configureDatabaseClusterMaintenanceWindow = configureDatabaseClusterMaintenanceWindow(context);
    await _configureDatabaseClusterMaintenanceWindow(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/maintenance`, {
      day: default_input.day,
      hour: default_input.hour,
    });
  });

  it('should output axios response', async () => {
    const _configureDatabaseClusterMaintenanceWindow = configureDatabaseClusterMaintenanceWindow(context);
    const output = await _configureDatabaseClusterMaintenanceWindow(default_input);

    expect(output).toBe(default_output);
  });
});
