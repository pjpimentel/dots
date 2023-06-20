import { getActiveDeploymentLogs } from './get-active-deployment-logs';

describe('get-active-deployment-logs', () => {
  const default_input = {
    app_id:`${require('crypto').randomBytes(2)}`,
    component_name:`${require('crypto').randomBytes(2)}`,
    follow:`${require('crypto').randomBytes(2)}`,
    pod_connection_timeout:`${require('crypto').randomBytes(2)}`,
    type:`${require('crypto').randomBytes(2)}`,
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
    expect(typeof getActiveDeploymentLogs).toBe('function');
    expect(typeof getActiveDeploymentLogs(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getActiveDeploymentLogs = getActiveDeploymentLogs(context);
    await _getActiveDeploymentLogs(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/apps/${default_input.app_id}/components/${default_input.component_name}/logs`, {
      params: {
        follow: default_input.follow,
        pod_connection_timeout: default_input.pod_connection_timeout,
        type: default_input.type,
      }
    });
  });

  it('should output axios response', async () => {
    const _getActiveDeploymentLogs = getActiveDeploymentLogs(context);
    const output = await _getActiveDeploymentLogs(default_input);

    expect(output).toBe(default_output);
  });
});
