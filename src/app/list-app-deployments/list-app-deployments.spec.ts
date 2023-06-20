import { listAppDeployments } from './list-app-deployments';

describe('list-app-deployments', () => {
  const default_input = {
    app_id: `${require('crypto').randomBytes(2)}`,
  };
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
    expect(typeof listAppDeployments).toBe('function');
    expect(typeof listAppDeployments(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listAppDeployments = listAppDeployments(context);
    await _listAppDeployments(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/apps/${default_input.app_id}/deployments`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listAppDeployments = listAppDeployments(context);
    const input = {
      ...default_input,
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
    }
    await _listAppDeployments(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/apps/${input.app_id}/deployments`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listAppDeployments = listAppDeployments(context);
    const output = await _listAppDeployments(default_input);

    expect(output).toBe(default_output);
  });
});
