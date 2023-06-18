import { getProject } from './get-project';

describe('get-project', () => {
  const default_input = {
    project_id: Math.random(),
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
    expect(typeof getProject).toBe('function');
    expect(typeof getProject(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getProject = getProject(context);
    await _getProject(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/projects/${default_input.project_id}`);
  });

  it('should output axios response', async () => {
    const _getProject = getProject(context);
    const output = await _getProject(default_input);

    expect(output).toBe(default_output);
  });
});
