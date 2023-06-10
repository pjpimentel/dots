import { getAppDeploymentLogs } from './get-app-deployment-logs';

describe('get-app-deployment-logs', () => {
  const default_input = {
    app_id: `${Math.random()}`,
    component_name: `${Math.random()}`,
    deployment_id: `${Math.random()}`,
    follow: `${Math.random()}`,
    pod_connection_timeout: `${Math.random()}`,
    type: `${Math.random()}`,
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
    expect(typeof getAppDeploymentLogs).toBe('function');
    expect(typeof getAppDeploymentLogs(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getAppDeploymentLogs = getAppDeploymentLogs(context);
    await _getAppDeploymentLogs(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/apps/${default_input.app_id}/deployments/${default_input.deployment_id}/components/${default_input.component_name}/logs`, {
      params: {
        follow: default_input.follow,
        pod_connection_timeout: default_input.pod_connection_timeout,
        type: default_input.type,
      }
    });
  });

  it('should output axios response', async () => {
    const _getAppDeploymentLogs = getAppDeploymentLogs(context);
    const output = await _getAppDeploymentLogs(default_input);

    expect(output).toBe(default_output);
  });
});
