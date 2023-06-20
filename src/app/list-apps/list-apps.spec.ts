import { listApps } from './list-apps';

describe('list-apps', () => {
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
    expect(typeof listApps).toBe('function');
    expect(typeof listApps(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listApps = listApps(context);
    await _listApps({});

    expect(httpClient.get).toHaveBeenCalledWith(`/apps`, {
      params: {
        page: 1,
        per_page: 25,
        with_projects: false,
      },
    });
  });

  it('should use `page`, `per_page` and `with_projects` input', async () => {
    const _listApps = listApps(context);
    const input = {
      with_projects: require('crypto').randomBytes(2),
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
    } as any;
    await _listApps(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/apps`, {
      params: {
        page: input.page,
        per_page: input.per_page,
        with_projects: input.with_projects,
      },
    });
  });

  it('should output axios response', async () => {
    const _listApps = listApps(context);
    const output = await _listApps({});

    expect(output).toBe(default_output);
  });
});
