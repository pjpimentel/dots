import { createAppDeployment } from './create-app-deployment';

describe('create-app-deployment', () => {
  const default_input = {
    app_id: `${require('crypto').randomBytes(2)}`,
    force_build: `${require('crypto').randomBytes(2)}`,
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
    expect(typeof createAppDeployment).toBe('function');
    expect(typeof createAppDeployment(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createAppDeployment = createAppDeployment(context);
    await _createAppDeployment(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/apps/${default_input.app_id}/deployments`, {
      force_build: default_input.force_build,
    });
  });

  it('should output axios response', async () => {
    const _createAppDeployment = createAppDeployment(context);
    const output = await _createAppDeployment(default_input);

    expect(output).toBe(default_output);
  });
});
