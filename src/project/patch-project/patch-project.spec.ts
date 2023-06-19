import { patchProject } from './patch-project';

describe('patch-project', () => {
  const default_input = {
    project_id: require('crypto').randomBytes(2),
    description: require('crypto').randomBytes(2),
    environment: require('crypto').randomBytes(2),
    is_default: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
    purpose: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

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
