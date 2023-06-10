import { getAppDeployment } from './get-app-deployment';

describe('get-app-deployment', () => {
  const default_input = {
    app_id: `${Math.random()}`,
    deployment_id: `${Math.random()}`,
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
    expect(typeof getAppDeployment).toBe('function');
    expect(typeof getAppDeployment(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getAppDeployment = getAppDeployment(context);
    await _getAppDeployment(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/apps/${default_input.app_id}/deployments/${default_input.deployment_id}`);
  });

  it('should output axios response', async () => {
    const _getAppDeployment = getAppDeployment(context);
    const output = await _getAppDeployment(default_input);

    expect(output).toBe(default_output);
  });
});
