import { updateProject } from './update-project';

describe('update-project', () => {
  const default_input = {
    project_id: Math.random(),
    description: Math.random(),
    environment: Math.random(),
    is_default: Math.random(),
    name: Math.random(),
    purpose: Math.random(),
  } as any;
  const default_output = Math.random();

  const httpClient = {
    put: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.put.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof updateProject).toBe('function');
    expect(typeof updateProject(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateProject = updateProject(context);
    await _updateProject(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/projects/${default_input.project_id}`, {
      ...default_input,
      project_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _updateProject = updateProject(context);
    const output = await _updateProject(default_input);

    expect(output).toBe(default_output);
  });
});
