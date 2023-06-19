import { cancelAppDeployment } from './cancel-app-deployment';

describe('cancel-app-deployment', () => {
  const default_input = {
    app_id: `${require('crypto').randomBytes(2)}`,
    deployment_id: `${require('crypto').randomBytes(2)}`,
  };
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
    expect(typeof cancelAppDeployment).toBe('function');
    expect(typeof cancelAppDeployment(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _cancelAppDeployment = cancelAppDeployment(context);
    await _cancelAppDeployment(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/apps/${default_input.app_id}/deployments/${default_input.deployment_id}/cancel`);
  });

  it('should output axios response', async () => {
    const _cancelAppDeployment = cancelAppDeployment(context);
    const output = await _cancelAppDeployment(default_input);

    expect(output).toBe(default_output);
  });
});
