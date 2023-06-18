import { listProjects } from './list-projects';

describe('list-projects', () => {
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
    expect(typeof listProjects).toBe('function');
    expect(typeof listProjects(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listProjects = listProjects(context);
    await _listProjects({});

    expect(httpClient.get).toHaveBeenCalledWith(`/projects`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listProjects = listProjects(context);
    const input = {
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listProjects(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/projects`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listProjects = listProjects(context);
    const output = await _listProjects({});

    expect(output).toBe(default_output);
  });
});
