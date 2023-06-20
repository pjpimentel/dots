import { listProjectResources } from './list-project-resources';

describe('list-project-resources', () => {
  const default_input = {
    project_id: require('crypto').randomBytes(2),
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
    expect(typeof listProjectResources).toBe('function');
    expect(typeof listProjectResources(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listProjectResources = listProjectResources(context);
    await _listProjectResources(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/projects/${default_input.project_id}/resources`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listProjectResources = listProjectResources(context);
    const input = {
      ...default_input,
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
    };
    await _listProjectResources(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/projects/${default_input.project_id}/resources`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listProjectResources = listProjectResources(context);
    const output = await _listProjectResources(default_input);

    expect(output).toBe(default_output);
  });
});
