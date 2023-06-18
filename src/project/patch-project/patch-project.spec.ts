import { patchProject } from './patch-project';

describe('patch-project', () => {
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
    patch: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.patch.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof patchProject).toBe('function');
    expect(typeof patchProject(context)).toBe('function');
  });

  it('should call axios.patch', async () => {
    const _patchProject = patchProject(context);
    await _patchProject(default_input);

    expect(httpClient.patch).toHaveBeenCalledWith(`/projects/${default_input.project_id}`, {
      ...default_input,
      project_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _patchProject = patchProject(context);
    const output = await _patchProject(default_input);

    expect(output).toBe(default_output);
  });
});
