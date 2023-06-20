import { getAggregatedAppDeploymentLogs } from './get-aggregated-app-deployment-logs';

describe('get-aggregated-app-deployment-logs', () => {
  const default_input = {
    app_id: `${require('crypto').randomBytes(2)}`,
    component_name: `${require('crypto').randomBytes(2)}`,
    deployment_id: `${require('crypto').randomBytes(2)}`,
    follow: `${require('crypto').randomBytes(2)}`,
    pod_connection_timeout: `${require('crypto').randomBytes(2)}`,
    type: `${require('crypto').randomBytes(2)}`,
  } as any;
  const default_output = require('crypto').randomBytes(2);

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
    expect(typeof getAggregatedAppDeploymentLogs).toBe('function');
    expect(typeof getAggregatedAppDeploymentLogs(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getAggregatedAppDeploymentLogs = getAggregatedAppDeploymentLogs(context);
    await _getAggregatedAppDeploymentLogs(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/apps/${default_input.app_id}/deployments/${default_input.deployment_id}/logs`, {
      params: {
        component_name: default_input.component_name,
        follow: default_input.follow,
        pod_connection_timeout: default_input.pod_connection_timeout,
        type: default_input.type,
      }
    });
  });

  it('should output axios response', async () => {
    const _getAggregatedAppDeploymentLogs = getAggregatedAppDeploymentLogs(context);
    const output = await _getAggregatedAppDeploymentLogs(default_input);

    expect(output).toBe(default_output);
  });
});
