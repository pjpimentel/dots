import { listDefaultProjectResources } from './list-default-project-resources';

describe('list-default-project-resources', () => {
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
    expect(typeof listDefaultProjectResources).toBe('function');
    expect(typeof listDefaultProjectResources(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listDefaultProjectResources = listDefaultProjectResources(context);
    await _listDefaultProjectResources({});

    expect(httpClient.get).toHaveBeenCalledWith(`/projects/default/resources`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listDefaultProjectResources = listDefaultProjectResources(context);
    const input = {
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
    } as any;
    await _listDefaultProjectResources(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/projects/default/resources`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listDefaultProjectResources = listDefaultProjectResources(context);
    const output = await _listDefaultProjectResources({});

    expect(output).toBe(default_output);
  });
});
